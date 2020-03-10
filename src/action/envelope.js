import { UPDATE_ENVELOPE } from '../actionTypes';

export const udpateEnvelope = (attackTime, attackValue, decay, sustain, release) => {

	return({
		type: UPDATE_CHORUS,
		payload: {
			attackTime,
			attackValue,
			decay,
			sustain,
			release,
		}
	});
};

