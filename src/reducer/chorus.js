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
				modalOpenFlag: true,
				modalType: action.payload.modalType
			};
