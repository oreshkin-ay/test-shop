export const cartProductSelector = (state) => {
  const { cart } = state;
  return Object.values(cart.productDetails);
};

export const cartsCountsSelector = (state) => {
  const { cart } = state;
  return cart.counts;
};

export const totalSelector = (state) => {
  const {
    cart: { counts, productDetails },
  } = state;

  const sum = Object.values(productDetails).reduce((acc, product) => {
    const { id, price } = product;
    return acc + counts[id] * Number(price);
  }, 0);

  return sum;
};

export const checkoutResultSelector = (state) => {
  const { successOrder, errorOrder } = state.cart;

  console.log();
  return { successOrder, errorOrder };
};
