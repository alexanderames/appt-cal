import { ADD_APPT } from "../constants";

export const addAppt = (text) => {
  const action = {
    type: ADD_APPT,
    text
  }
  console.log('action in addText', action);
  return action;
}
