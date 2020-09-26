export const storeNamePepos = "Cart";

const initialState = {
  counts: {},
  productDetails: {},
  successOrder: null,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "BUY":
      const { counts, productDetails } = payload;
      return {
        ...state,
        counts: {
          ...state.counts,
          ...counts,
        },
        productDetails: {
          ...state.productDetails,
          ...productDetails,
        },
      };
    case "SET_COUNT":
      return {
        ...state,
        counts: {
          ...state.counts,
          ...payload,
        },
      };
    case "REMOVE_ORDER":
      return {
        ...state,
        ...payload,
      };
    case "ORDER_SUCCESS":
      return {
        ...state,
        successOrder: payload,
      };
    case "CART_CLEAN":
      return initialState;
    default:
      return state;
  }
};
