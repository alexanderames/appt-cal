import { ADD_APPT } from '../constants';

const appointment = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const appointments = (state = [], action) => {
  let appointments = null;
  switch (action.type) {
    case ADD_APPT:
      appointments = [...state, appointment(action)];
      console.log('appointments:', appointments);
      return appointments;
    default:
      return state;
  }
}

export default appointments;
