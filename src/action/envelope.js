import { UPDATE_ENVELOPE } from '../actionTypes';

export const updateEnvelope = (attackTime, attackValue, decay, sustain, release) => {

	return({
		type: UPDATE_ENVELOPE,
		payload: {
			attackTime,
			attackValue,
			decay,
			sustain,
			release,
		}
	});
};

