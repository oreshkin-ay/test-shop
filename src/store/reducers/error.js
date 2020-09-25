export default (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  let isError = requestState === "FAILURE";
  
  return {
    ...state,
    [requestName]: {
      isError,
      message: payload?.message,
    },
  };
};
