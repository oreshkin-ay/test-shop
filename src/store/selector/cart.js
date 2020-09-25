export const cartProductSelector = (state) => {
  const { cart } = state;
  return Object.values(cart.productDetails);
};

export const cartsCountsSelector = (state) => {
  const { cart } = state;
  return cart.counts;
};
