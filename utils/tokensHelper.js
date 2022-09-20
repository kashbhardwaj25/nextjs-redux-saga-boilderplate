import * as R from "ramda";

import { isPresent } from "./helper";
import store from "../redux";
import actionTypes from "../redux/actionTypes";

const ACCESS_TOKEN = "access-token";

export const getTokens = () => {
  const tokens = {};

  const accessToken = getCookie(ACCESS_TOKEN);

  if (isPresent(accessToken)) {
    tokens.accessToken = R.pathOr("", [], accessToken);
  }

  return tokens;
};

export const setTokens = (tokens) => {
  const { accessToken } = tokens;

  document.cookie = `${ACCESS_TOKEN}=${accessToken}; max-age=7200; path=/;`;

  store.dispatch({
    type: actionTypes.SET_ACCESS_TOKEN,
    payload: { accessToken },
  });
};

export const isTokenPresent = () => {
  const { accessToken } = getTokens();

  const isAccessTokenPresent = isPresent(accessToken);

  return {
    isAccessTokenPresent,
  };
};

export const clearTokens = () => {
  document.cookie = `${ACCESS_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

  store.dispatch({
    type: actionTypes.SET_ACCESS_TOKEN,
    payload: { accessToken: "" },
  });
};

function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArr = decodedCookie.split("; ");
  let res;
  cookieArr.forEach((cookie) => {
    if (cookie.indexOf(name) === 0) res = cookie.substring(name.length);
  });
  return res;
}
