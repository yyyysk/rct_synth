import { UPDATE_WAH } from '../actionTypes';

export const updateWah = (cutoff, resonance, rate, lfo) => {

	return({
		type: UPDATE_WAH,
		payload: {
			cutoff,
			resonance,
			rate,
			lfo
		}
	});
};

