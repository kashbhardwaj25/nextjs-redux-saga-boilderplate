import { combineReducers } from "redux";

import user from "./user";

const allReducers = combineReducers({ user });

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "USER_LOGOUT_SUCCESS") {
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
