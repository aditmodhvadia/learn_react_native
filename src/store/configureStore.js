import { createStore, combineReducers } from "redux";

import namesReducer from "./reducers/names";

const rootReducer = combineReducers({
  names: namesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
