import Envelope from './envelope';
import Chorus from './chorus';

/**
 * 音源の生成クラス
 */
class Audio {

	constructor(envelope, delay, chorus) {
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
		// Chorusのパラメータ
		this._chorus = chorus;
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
	 * Chorusのセッター
	 */
	setChorus(chorus) {
		this._chorus = chorus;
	}

	/**
	 * 音鳴らす
	 */
	startNote(noteId) {
		if (!noteId) return;

		// オシレーター
		const osc = this.ctx.createOscillator();
		osc.type = this._wave;
		osc.frequency.value = this.note[noteId];

		// EnvelopeFilter
		const eg = new Envelope(this.ctx, this._envelope);

		// Chorus
		const chorus = new Chorus(this.ctx, this._chorus);
		chorus.init();

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

		// chorusへ接続
		osc.connect(chorus.getNode());
		// chorusMixへ接続
		chorus.getNode().connect(chorus.getNode_mix());
		// Delayのdryへの接続
		chorus.getNode_mix().connect(dry);
		// Enveloprgeneratorに接続
		dry.connect(eg.getNode());
		// Dryを出力
		eg.getNode().connect(this.ctx.destination);

		// ディレイEffect用の出力を接続
		eg.getNode().connect(delay);
		delay.connect(wet);
		wet.connect(this.ctx.destination);

		// Feedbackを接続
		delay.connect(feedback);
		feedback.connect(delay);

				
		// start sound
		osc.start(0);
		// chorsu start
		chorus.getNode_LFO().start(0);

		eg.init();
	

		this.oscs.push({
			note: noteId,
			osc: osc,
			eg: eg,
			chorus: chorus,			
		});
	}

	/**
	 * おと止める
	 */
	stopNote(noteId) {
		// キーアップした音のoscを特定する
		this.oscs.forEach((osc, i, oscs) => {
			if (osc.note === noteId) {
				// Release
				osc.eg.release();
				
				// 0.001未満になったら音を止める
				let intervalId;
				intervalId = window.setInterval(function() {
					if (osc.eg.getNode().gain.value < this.VALUE_OF_STOP) {
						osc.osc.stop();
						// 配列から削除
          	const del = oscs.splice(i, 1);
						del = null;

						if (intervalId !== null) {
							window.clearInterval(intervalId);
							intervalId = null;
						}
					}
				},0);

			}
		});
	}
}

export default Audio;
