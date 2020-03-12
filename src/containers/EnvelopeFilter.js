import { connect } from 'react-redux';
import Envelope from '../components/EnvelopeFilter';
import { updateEnvelope } from '../action/envelope';

const mapStateToProps = (state) =>  {

	return {
		attackTime: state.envelopeHandler.attackTime,
		attackValue: state.envelopeHandler.attackValue,
		decay: state.envelopeHandler.decay,
		sustain: state.envelopeHandler.sustain,
		release: state.envelopeHandler.release,
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		updateEnvelope(attackTime, attackValue, decay, sustain, release) {
			dispatch(updateEnvelope(attackTime, attackValue, decay, sustain, release));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Envelope);

