class Envelope {
	
	constructor(ctx, config, wah) {
		this._ctx = ctx;
		this._config = config;
		this._eg = ctx.createGain();
		this._wah = wah;
		this._maxCutoff = 1000;
		this._minCutoff = this._maxCutoff * 0.1; 
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

		// オートワウ start
		this._wah.frequency.setValueAtTime(this._minCutoff, t0);

		// Attackの処理
		// attack timeでgainがAttackvaluになるように設定
		const t1 = parseFloat(t0 + this._config.attackTime); 
		this._eg.gain.linearRampToValueAtTime(this._config.attackValue, t1);
		// attack時のワウ
		this._wah.frequency.linearRampToValueAtTime(this._maxCutoff, t1);
		
		// Decay (Attackの最大値からSustainに衰退するまでの時間)
		// Sustain 維持する音量(Gain.gain.value)
		this._eg.gain.setTargetAtTime(this._config.sustain, t1, this._config.decay);
		this._wah.frequency.setTargetAtTime((this._maxCutoff * this._config.sustain), t1, this._config.decay);
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

		this._wah.frequency.cancelScheduledValues(t3);
		this._wah.frequency.setValueAtTime(this._wah.frequency.value, t3);
		this._wah.frequency.setTargetAtTime(this._minCutoff, t3, this._config.release);
	}

	/**
	 * 本体を返す
	 */
	getNode() {
		return this._eg;
	}
}

export default Envelope;

