import { ADD_NAME, DELETE_NAME } from "../actions/actionTypes";

const initialState = {
  firstNamesList: [],
  firstName: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
    return {
      ...state,
      firstName: action.firstName,
        firstNamesList: state.firstNamesList.concat({
          key: Math.random(),
          value: action.firstName
        })
    };

    case DELETE_NAME:
    return {
      ...state,
      firstNamesList: state.firstNamesList.filter(firstName => {
        return firstName.key !== action.nameKey;
      })
    };
    default:
      return state;
  }
};

export default reducer;
