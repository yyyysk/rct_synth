class Audio {

	constructor() {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		this.ctx = new AudioContext();
		this.ctx.createGain = this.ctx.createGain || this.ctx.createGainNode;
		// 各ピッチの周波数
		this.note = {
			'C': 261.6,
			'C#': 277.2,
			'D': 293.7,
			'D#': 311.1,
			'E': 329.6,
			'F': 349.2,
			'F#': 370.0,
			'G': 392.0,
			'G#': 415.3,
			'A': 440.0,
			'A#': 466.2,
			'B': 493.9,
			'C2': 523.3,
			'C#2': 554.4,
			'D2': 587.4,
			'D#2': 622.4,
			'E2': 659.4
		};
		// オシレーターとエンベロープフィルタの保持用
		this.oscs = [];
		// 0.001未満で音を止める
		this.VALUE_OF_STOP = 1e-3;
	}


	/**
	 * 音鳴らす
	 */
	startNote(noteId) {
		if (!noteId) return;

		// オシレーター作る
		const osc = this.ctx.createOscillator();
		osc.frequency.value = this.note[noteId];

		// gain node -> Envelope
		const gain = this.ctx.createGain();
		// Envelopeで処理するため
		// gain.gain.value = 0.2;

		osc.connect(gain);
		gain.connect(this.ctx.destination);
		
		osc.start();

		// エンベロープを作成(初期化)
		// 音源スタート時にgainを0に設定する
		const t0 = this.ctx.currentTime;
		gain.gain.setValueAtTime(0, t0);

		// Attackの処理
		// attack timeでgainが1になるように設定
		const attackTime = 1;
		const attackValue = 1;
		const t1 = t0 * attackTime;
		gain.gain.linearRampToValueAtTime(attackValue, t1);
		
		// レガシーブラウザ対応
		gain.gain.setTargetAtTime = gain.gain.setTargetAtTime ||
                              gain.gain.setTargetValueAtTime;
		// Decay (Attackの最大値からSustainに衰退するまでの時間)
		// Sustain 維持する音量(Gain.gain.value)
		const decayTime = 1;
		const sustainValue = 0.2;
		gain.gain.setTargetAtTime(sustainValue, t1, decayTime);

		this.oscs.push({
			note: noteId,
			osc: osc,
			gain: gain
		});
	}

	/**
	 * おと止める
	 */
	stopNote(noteId) {
		// キーアップした音のoscを特定する
		this.oscs.some((osc, i, oscs) => {
			if (osc.note === noteId) {
				// Release
				const t3 = this.ctx.currentTime;
				const releaseTime = 0.2;
				// AttackとDecayの処理をキャンセル
				osc.gain.gain.cancelScheduledValues(t3);
				osc.gain.gain.setTargetAtTime(0, t3, releaseTime);

				// 0.001未満になったら音を止める
				let intervalId;
				intervalId = window.setInterval(function() {
					if (osc.gain.gain.value < this.VALUE_OF_STOP) {
						osc.osc.stop();
						// 配列から削除
          	oscs.splice(i, 1);

						if (intervalId !== null) {
							window.clearInterval(intervalId);
							intervalId = null;
						}
					}
				},0);

				// breakの代わり
				// return true;
			}
		});
	}
}

export default Audio;
