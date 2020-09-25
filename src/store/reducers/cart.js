export const storeNamePepos = "Cart";

const initialState = {
  counts: {},
  productDetails: {},
  successOrder: null,
  errorOrder: null,
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
    case "SUCCESS_ORDER":
      return {
        ...state,
        successOrder: payload,
        errorOrder: null,
      };
    case "ERROR_ORDER":
      return {
        ...state,
        successOrder: null,
        errorOrder: payload,
      };
    default:
      return state;
  }
};
