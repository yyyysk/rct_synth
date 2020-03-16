import { UPDATE_WAVE } from '../actionTypes';

const initialState = {
	wave: 'sine'
};

const waveHandler = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_WAVE:
			return {
				...state,
				wave: action.payload.wave
			};

		default: return state;
	}
};

export default waveHandler;

