import { UPDATE_CHORUS } from '../actionTypes';

const initialState = {
	rate: 0.5,
	time: 0.020,
	frequency: 0.05,
	mix: 0.5,
};

const chorusHandler = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CHORUS:
			return {
				...state,
				rate: action.payload.rate,
				time: action.payload.time,
				frequency: action.payload.frequency,
				mix: action.payload.mix
			};

		default: return state;
	}
};

export default chorusHandler;

