import { connect } from 'react-redux';
import Wah from '../components/Wah';
import { updateWah } from '../action/wah';

const mapStateToProps = (state) =>  {

	return {
		cutoff: state.wahHandler.cutoff,
		resonance: state.wahHandler.resonance,
		rate: state.wahHandler.rate,
		lfo: state.wahHandler.lfo,
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		updateWah(cutoff, resonance, rate, lfo) {
			dispatch(updateWah(cutoff, resonance, rate, lfo));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Wah);

