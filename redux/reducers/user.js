import { getLoadingStateByActionName } from "../../utils/helper";
import actionTypes from "../actionTypes";
import { getTokens } from "../../utils/tokensHelper";

const getInitialState = () => {
  const { accessToken } = typeof window !== "undefined" ? getTokens() : {};

  const initialState = {
    accessToken,
    userSigningIn: false,
  };
  return initialState;
};

const authentication = (state = getInitialState(), action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.USER_SIGN_IN_REQUEST:
    case actionTypes.USER_SIGN_IN_SUCCESS:
    case actionTypes.USER_SIGN_IN_FAILURE: {
      return {
        ...state,
        userSigningIn: getLoadingStateByActionName(type),
      };
    }

    case actionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };

    default:
      return state;
  }
};

export default authentication;
