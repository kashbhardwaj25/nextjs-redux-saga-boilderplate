import { call, put } from "redux-saga/effects";
import { pathOr } from "ramda";

import actionTypes from "../../actionTypes";
import { setTokens } from "../../../utils/tokensHelper";
import axiosService from "../../../services/axiosService";

function* userLogin(action) {
  const { email, password } = action.payload;

  try {
    const response = yield call(axiosService.post, "/user/login", {
      email,
      password,
    });

    const accessToken = pathOr("", ["data", "token"], response);

    setTokens({ accessToken });

    yield put({
      type: actionTypes.USER_SIGN_IN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actionTypes.USER_SIGN_IN_FAILURE,
    });
  }
}

export default userLogin;
