export const storeNamePepos = "Goods";

const initialState = {
  goods: [],
  details: null,
  total: 0,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_GOODS_SUCCESS":
      return {
        ...state,
        ...payload,
      };
    case "GET_GOODS_DETAILS_SUCCESS":
      return {
        ...state,
        details: payload,
      };
    default:
      return state;
  }
};
