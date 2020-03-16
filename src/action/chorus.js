import { UPDATE_CHORUS } from '../actionTypes';

export const updateChorus = (rate, time, frequency, mix) => {

	return({
		type: UPDATE_CHORUS,
		payload: {
			rate,
			time,
			frequency,
			mix
		}
	});
};

