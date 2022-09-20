import * as R from "ramda";

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);
export const isPresent = R.complement(isNilOrEmpty);

export const getLoadingStateByActionName = (action) => {
  if (
    R.is(String, action) &&
    (R.includes("REQUEST", action) ||
      R.includes("SUCCESS", action) ||
      R.includes("FAILURE", action))
  ) {
    return (
      R.includes("REQUEST", action) &&
      !R.includes("SUCCESS", action) &&
      !R.includes("FAILURE", action)
    );
  }

  return null;
};
