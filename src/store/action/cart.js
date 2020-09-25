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
