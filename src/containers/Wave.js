import { connect } from 'react-redux';
import Wave from '../components/Wave';
import { updateWave } from '../action/wave';

const mapStateToProps = (state) =>  {

	return {
		wave: state.waveHandler.wave,
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		updateWave(wave) {
			dispatch(updateWave(wave));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Wave);

