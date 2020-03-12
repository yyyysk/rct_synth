import { connect } from 'react-redux';
import Chorus from '../components/Chorus';
import { updateChorus } from '../action/chorus';

const mapStateToProps = (state) =>  {

	return {
		rate: state.chorusHandler.rate,
		time: state.chorusHandler.time,
		frequency: state.chorusHandler.frequency,
		mix: state.chorusHandler.mix
	};	
}

const mapDispatchToProps = (dispatch) => {

	return {
		updateChorus(rate, time, frequency, mix) {
			dispatch(updateChorus(rate, time, frequency, mix));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Chorus);

