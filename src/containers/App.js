import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) =>  {

	return {
		wave: state.waveHandler.wave,
		chorus: state.chorusHandler,
		delay: state.delayHandler,
		envelope: state.envelopeHandler,
		wah: state.wahHandler,
	};
};

export default connect(mapStateToProps)(App);

