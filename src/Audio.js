class Audio {

	constructor(envelope, delay) {
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

		// evnelope filter
		this._envelope = envelope;
		// 波形
		this._wave = 'sine';
		// Delayのパラメータ
		this._delay = delay;
	}

	/**
	 * waveのセッター
	 */
	setWave(wave) {
		this._wave = wave;
	}

	/**
	 * Envelopeのセッター
	 */
	setEnvelope(envelope) {
		this._envelope = envelope;	
	}

	/**
	 * Delayのセッター
	 */
	setDelay(delay) {
		this._delay = delay;
	}

	/**
	 * 音鳴らす
	 */
	startNote(noteId) {
		if (!noteId) return;

		// オシレーター作る
		const osc = this.ctx.createOscillator();
		// 波形
		osc.type = this._wave;
		console.log(osc.type);
		osc.frequency.value = this.note[noteId];

		// EnvelopeFilter用のGainNode
		const gain = this.ctx.createGain();

		/**
		 * ========================
		 * 				DELAY!!!!
		 * =======================
		 */
		const MAX_DELAY_TIME = 2;
		const delay = this.ctx.createDelay(MAX_DELAY_TIME);
		const dry = this.ctx.createGain(); // 原音用
		const wet = this.ctx.createGain(); // ディレイサウンド用
		const feedback = this.ctx.createGain(); // FB用

		// ディレイのパラメータ
		delay.delayTime.value = this._delay.delayTime;
		dry.gain.value = this._delay.dry;
		wet.gain.value = this._delay.wet;
		feedback.gain.value = this._delay.feedback;

		/**
		 * 原音側
		 */
		// dryへの接続
		osc.connect(dry);
		// Enveloprgeneratorに接続
		dry.connect(gain);
		// Dryを出力
		gain.connect(this.ctx.destination);

		// ディレイEffect用の出力を接続
		gain.connect(delay);
		delay.connect(wet);
		wet.connect(this.ctx.destination);

		// Feedbackを接続
		delay.connect(feedback);
		feedback.connect(delay);

		osc.start(0);


		/**
		 * ======================
		 * 			Envelope!!!
		 * =====================
		 */
		// エンベロープを作成(初期化)
		// 音源スタート時にgainを0に設定する
		const t0 = this.ctx.currentTime;
		gain.gain.setValueAtTime(0, t0);

		// Attackの処理
		// attack timeでgainが1になるように設定
		const t1 = parseFloat(t0 + this._envelope.attackTime); 
		console.log(t1);
		gain.gain.linearRampToValueAtTime(this._envelope.attackValue, t1);
		
		// レガシーブラウザ対応
		gain.gain.setTargetAtTime = gain.gain.setTargetAtTime ||
                              gain.gain.setTargetValueAtTime;
		// Decay (Attackの最大値からSustainに衰退するまでの時間)
		// Sustain 維持する音量(Gain.gain.value)
		gain.gain.setTargetAtTime(this._envelope.sustain, t1, this._envelope.decay);
		

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
				// AttackとDecayの処理をキャンセル
				osc.gain.gain.cancelScheduledValues(t3);
				osc.gain.gain.setTargetAtTime(0, t3, this._envelope.release);

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
