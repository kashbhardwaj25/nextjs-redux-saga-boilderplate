import asyncActions from "./asyncActions";
import syncActions from "./syncActions";

const actionTypes = {
  ...asyncActions,
  ...syncActions,
};

export default actionTypes;
