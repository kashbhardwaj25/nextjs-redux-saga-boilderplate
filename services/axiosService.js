import axios from "axios";

import { isPresent } from "../utils/helper";
import { getTokens } from "../utils/tokensHelper";

const axiosService = () => {
  const defaultOptions = {
    baseURL: "https://api-nodejs-todolist.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const { accessToken: token } = getTokens();
    config.headers.Authorization = isPresent(token) ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export default axiosService();
