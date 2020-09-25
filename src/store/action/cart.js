import api from "../../service/api";

export const buyProduct = (product) => (dispatch, getState) => {
  const state = getState();
  const { id } = product;
  const count = state.cart.counts[id];
  const newCount = count ? count + 1 : 1;

  const data = {
    counts: {
      [id]: newCount,
    },
    productDetails: {
      [id]: product,
    },
  };

  dispatch({
    type: "BUY",
    payload: data,
  });
};

export const increaseCountProduct = (idProduct) => (dispatch, getState) => {
  const state = getState();
  const count = state.cart.counts[idProduct];

  dispatch({
    type: "SET_COUNT",
    payload: {
      [idProduct]: count + 1,
    },
  });
};

export const reduceCountProduct = (idProduct) => (dispatch, getState) => {
  const state = getState();
  const count = state.cart.counts[idProduct];

  dispatch({
    type: "SET_COUNT",
    payload: {
      [idProduct]: count - 1 <= 0 ? 1 : count - 1,
    },
  });
};

export const setCountProduct = (countProduct) => (dispatch) => {
  dispatch({
    type: "SET_COUNT",
    payload: countProduct,
  });
};

export const removeOrder = (idProduct) => (dispatch, getState) => {
  const state = getState();
  const { counts, productDetails } = state.cart;
  const newCounts = Object.entries(counts).reduce((acc, [key, count]) => {
    if (key !== idProduct) acc[key] = +count;
    return acc;
  }, {});

  const newProductDetails = Object.entries(productDetails).reduce(
    (acc, [key, product]) => {
      if (key !== idProduct) acc[key] = product;
      return acc;
    },
    {}
  );

  dispatch({
    type: "REMOVE_ORDER",
    payload: {
      counts: newCounts,
      productDetails: newProductDetails,
    },
  });
};

/**
 * запрос на оплату
 */
export const checkout = (isError = true) => async (dispatch, getState) => {
  const state = getState();
  const { cart } = state;

  dispatch({ type: "ORDER_REQUEST" });

  try {
    await api.сheckoutOrder(cart, isError);

    dispatch({
      type: "ORDER_SUCCESS",
      payload: true,
    });
  } catch (e) {
    dispatch({ type: "ORDER_FAILURE", payload: true });
  }
};
