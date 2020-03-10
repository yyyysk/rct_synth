import { UPDATE_DELAY } from '../actionTypes';

export const updateDelay = (delayTime, dry, wet, feedback) => {

	return({
		type: UPDATE_CHORUS,
		payload: {
			delaytime,
			dry,
			wet,
			feedback
		}
	});
};

