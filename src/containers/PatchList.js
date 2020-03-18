import { connect } from 'react-redux';
import PatchList from '../components/PatchList';
import { updateEnvelope } from '../action/envelope';
import { updateChorus } from '../action/chorus';
import { updateDelay } from '../action/delay';
import { updateWah } from '../action/wah';
import { updateWave } from '../action/wave';

const mapStateToProps = (state) =>  {

	return ({
		chorus: {
			rate: state.chorusHandler.rate,
			time: state.chorusHandler.time,
			frequency: state.chorusHandler.frequency,
			mix: state.chorusHandler.mix
		},
		envelope: {
			attackTime: state.envelopeHandler.attackTime,
			attackValue: state.envelopeHandler.attackValue,
			decay: state.envelopeHandler.decay,
			sustain: state.envelopeHandler.sustain,
			release: state.envelopeHandler.release,
		},
		delay: {
			delayTime: state.delayHandler.delayTime,
			dry: state.delayHandler.dry,
			wet: state.delayHandler.wet,
			feedback: state.delayHandler.feedback
		},
		wah: {
			cutoff: state.wahHandler.cutoff,
			resonance: state.wahHandler.resonance,
			rate: state.wahHandler.rate,
			lfo: state.wahHandler.lfo,
		},
		wave: state.waveHandler.wave,
	});
};

const mapDispatchToProps = (dispatch) => {

	return {
		updateEnvelope(attackTime, attackValue, decay, sustain, release) {
			dispatch(updateEnvelope(attackTime, attackValue, decay, sustain, release));
		},
		updateChorus(rate, time, frequency, mix) {
			dispatch(updateChorus(rate, time, frequency, mix));
		},
		updateDelay(delayTime, dry, wet, feedback) {
			dispatch(updateDelay(delayTime, dry, wet, feedback));
		},
		updateWah(cutoff, resonance, rate, lfo) {
			dispatch(updateWah(cutoff, resonance, rate, lfo));
		},
		updateWave(wave) {
			dispatch(updateWave(wave));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PatchList);
