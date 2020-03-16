import { UPDATE_DELAY } from '../actionTypes';

export const updateDelay = (delayTime, dry, wet, feedback) => {

	return({
		type: UPDATE_DELAY,
		payload: {
			delayTime,
			dry,
			wet,
			feedback
		}
	});
};

