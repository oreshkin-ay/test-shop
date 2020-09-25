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
    type: "INCREASE",
    payload: {
      [idProduct]: count + 1,
    },
  });
};
