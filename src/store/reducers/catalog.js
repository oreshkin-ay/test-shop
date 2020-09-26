export const storeNamePepos = "Catalog";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_CATALOG_SUCCESS":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
