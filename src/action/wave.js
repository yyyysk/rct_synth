import { UPDATE_WAVE } from '../actionTypes';

export const updateWave = (wave) => {

	return({
		type: UPDATE_WAVE,
		payload: {
			wave,
		}
	});
};

