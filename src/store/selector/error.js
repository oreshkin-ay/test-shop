export const errorSelector = (action, state) => {
  return state.errorReducer[action];
};
