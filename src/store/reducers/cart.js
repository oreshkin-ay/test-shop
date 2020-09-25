export const storeNamePepos = "Cart";

const initialState = {
  counts: {},
  productDetails: {},
  // order: [],
  // summ: 0,
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

    default:
      return state;
  }
};
