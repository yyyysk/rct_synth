class Envelope {
	
	constructor(ctx, config) {
		this._ctx = ctx;
		this._config = config;
		this._eg = ctx.createGain();
			}

	/**
	 * Envelopeを作成
	 * @return {object} Envelope
	 */
	init() {
		// レガシーブラウザ対応
		this._eg.gain.setTargetAtTime = this._eg.gain.setTargetAtTime || this._eg.gain.setTargetValueAtTime;	

		// 音源スタート時にgainを0に設定する
		const t0 = this._ctx.currentTime;
		this._eg.gain.setValueAtTime(0, t0);

		// Attackの処理
		// attack timeでgainがAttackvaluになるように設定
		const t1 = parseFloat(t0 + this._config.attackTime); 
		this._eg.gain.linearRampToValueAtTime(this._config.attackValue, t1);
		
		// Decay (Attackの最大値からSustainに衰退するまでの時間)
		// Sustain 維持する音量(Gain.gain.value)
		this._eg.gain.setTargetAtTime(this._config.sustain, t1, this._config.decay);
	}

	/**
	 * リリース処理
	 */
	release() {
		// Release
		const t3 = this._ctx.currentTime;
		// AttackとDecayの処理をキャンセル
		this._eg.gain.cancelScheduledValues(t3);
		this._eg.gain.setTargetAtTime(0, t3, this._config.release);
	}

	/**
	 * 本体を返す
	 */
	getNode() {
		return this._eg;
	}
}

export default Envelope;

