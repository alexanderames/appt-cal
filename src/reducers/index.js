import {ADD_APPT, DELETE_APPT} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const removeById = (state = [], id) => {
  const appointments = state.filter(appointment => appointment.id !== id);
  return appointments;
}

const appointment = (action) => {
  let {text, dueDate} = action;
  return {id: Math.random(), text, dueDate}
}

const appointments = (state = [], action) => {
  let appointments = null;
  state = read_cookie('appointments');
  switch (action.type) {
    case ADD_APPT:
      appointments = [
        ...state,
        appointment(action)
      ];
      bake_cookie('appointments', appointments);
      return appointments;
    case DELETE_APPT:
      appointments = removeById(state, action.id);
      bake_cookie('appointments', appointments);
      return appointments;
    default:
      return state;
  }
}

export default appointments;
