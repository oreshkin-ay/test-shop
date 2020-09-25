export const storeNamePepos = "Products";

const initialState = {
  list: [],
  details: null,
  total: 0,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        ...payload,
      };
    case "GET_PRODUCT_DETAILS_SUCCESS":
      return {
        ...state,
        details: payload,
      };
    default:
      return state;
  }
};
