import { ADD_APPT, DELETE_APPT } from '../constants';

export const addAppt = (text, dueDate) => {
	const action = {
		type: ADD_APPT,
		text,
		dueDate
	}
	return action;
}

export const deleteAppts = (id) => {
	const action = {
		type: DELETE_APPT,
		id
	}
	return action;
}
