import { UPDATE_WAH } from '../actionTypes';

const initialState = {
	cutoff: 2000,
	resonance: 5,
	rate: 0.5,
	lfo: 0 
};

const wahHandler = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_WAH:
			return {
				...state,
				cutoff: action.payload.cutoff,
				resonance: action.payload.resonance,
				rate: action.payload.rate,
				lfo: action.payload.lfo
			};
		
		default: return state;
	}
}

export default wahHandler;


