import { all } from "redux-saga/effects";

import user from "./user";

export const tasks = [...user];

const rootSaga = function* rootSaga() {
  yield all(tasks);
};

export default rootSaga;
