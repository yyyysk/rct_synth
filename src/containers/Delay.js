import { connect } from 'react-redux';
import Delay from '../components/Delay';
import { updateDelay } from '../action/delay';

const mapStateToProps = (state) =>  {

	return {
		delayTime: state.delayHandler.delayTime,
		dry: state.delayHandler.dry,
		wet: state.delayHandler.wet,
		feedback: state.delayHandler.feedback
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		updateDelay(delayTime, dry, wet, feedback) {
			dispatch(updateDelay(delayTime, dry, wet, feedback));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Delay);

