import { UPDATE_DELAY } from '../actionTypes';

const initialState = {
	delayTime: 1,
	dry: 1,
	wet: 0,
	feedback: 0,
};

const envelopeHandler = (state = initialState, action) => {
	
	switch(action.type) {
		case UPDATE_ENVELOPE:
			return {
				...state,
				delayTime: action.payload.delayTime,
				dry: action.payload.dry,
				wet: action.payload.wet,
				feedback: action.payload.feedback
			};


		default: return state;
	}
}

export default envelopeHandler;

