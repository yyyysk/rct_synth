import { combineReducers } from 'redux';
import chorusHandler from './chorus';
import delayHandler from './delay';
import envelopeHandler from './envelope';
import wahHandler from './wah';
import waveHandler from './wave';

const reducer = combineReducers({
	chorusHandler,
	delayHandler,
	envelopeHandler,
	wahHandler,
	waveHandler
});

export default reducer;

