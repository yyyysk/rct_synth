class Audio {

	constructor() {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		this.ctx = new AudioContext();
		this.ctx.createGain = this.ctx.createGain || this.ctx.createGainNode;
	}

	startNote() {
		var osc = this.ctx.createOscillator();
		osc.frequency.valu = 261.63;

		var gain = this.ctx.createGain();
		gain.gain.value = 0.3;

		osc.connect(gain);
		gain.connect(this.ctx.destination);
		osc.start();
	}
}

export default Audio;
