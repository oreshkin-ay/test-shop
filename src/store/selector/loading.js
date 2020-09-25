export const loadingSelector = (actions = [], state) => {
  return actions.some((action) => state.loadingReducer[action]);
};
