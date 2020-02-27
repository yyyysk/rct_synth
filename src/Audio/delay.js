/**
 * Delay
 */
class Delay {

	constructor(ctx, config) {
		this._ctx = ctx;
		this._config = config;
		this._MAX_DELAY_TIME = 2;
	}

	init() {
		this._delay = this._ctx.createDelay(this._MAX_DELAY_TIME);
		this._dry = this._ctx.createGain(); // 原音用
		this._wet = this._ctx.createGain(); // ディレイサウンド用
		this._feedback = this._ctx.createGain(); // FB用

		// ディレイのパラメータ
		this._delay.delayTime.value = this._config.delayTime;
		this._dry.gain.value = this._config.dry;
		this._wet.gain.value = this._config.wet;
		this._feedback.gain.value = this._config.feedback;
	}

	getNode() {
		return this._delay;
	}

	getNode_dry() {
		return this._dry;
	}

	getNode_wet() {
		return this._wet;
	}

	getNode_feedback() {
		return this._feedback;
	}
}

export default Delay;

