import { takeLatest } from "redux-saga/effects";

import actionTypes from "../../actionTypes";
import userLogin from "./userLogin";

const user = [takeLatest(actionTypes.USER_SIGN_IN_REQUEST, userLogin)];

export default user;
