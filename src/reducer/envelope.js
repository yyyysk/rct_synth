import { UPDATE_ENVELOPE } from '../actionTypes';

const initialState = {
	attackTime: 0,
	attackValue: 0.2,
	decay: 0.5,
	sustain: 0.2,
	release: 0.2 
};

const envelopeHandler = (state = initialState, action) => {
	
	switch(action.type) {
		case UPDATE_ENVELOPE:
			return {
				...state,
				attackTime: action.payload.attackTime,
				attackvalue: action.payload.attackValue,
				decay: action.payload.decay,
				sustain: action.payload.sustain,
				release: action.payload.release
			};


		default: return state;
	}
}

export default envelopeHandler;
