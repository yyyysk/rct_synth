/**
 * Chorus
 */
class Chorus {

	constructor(ctx, config) {
		this._ctx = ctx;
		this._config = config;
	}

	init() {
		this._chorus = this._ctx.createDelay();
		this._chorusLFO = this._ctx.createOscillator();
		this._chorusDepth= this._ctx.createGain();
		this._chorusMix = this._ctx.createGain();

		// パラメータの設定
		const depthRate = this._config.rate;
		this._chorus.delayTime.value = this._config.time;
		this._chorusDepth.gain.value = this._chorus.delayTime.value * depthRate;
		this._chorusLFO.frequency.value = this._config.frequency;
		this._chorusMix.gain.value = this._config.mix;

		// ChorusのLFOをdepthと接続
		this._chorusLFO.connect(this._chorusDepth);
		this._chorusDepth.connect(this._chorus.delayTime);
	}

	getNode() {
		return this._chorus;
	}

	getNode_mix() {
		return this._chorusMix;
	}

	getNode_LFO() {
		return this._chorusLFO;
	}
}

export default Chorus;

