import { ADD_NAME, DELETE_NAME, SAVE_NAME } from "./actionTypes";

export const addName = firstName => {
  return {
    type: ADD_NAME,
    firstName: firstName
  };
};

export const deleteName = key => {
  return {
    type: DELETE_NAME,
    nameKey: key
  };
};

export const saveName = val => {
  return {
    type: SAVE_NAME,
    name: val
  };
};
