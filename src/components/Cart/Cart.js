import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increaseCountProduct } from "../../store/action/cart";
import {
  cartProductSelector,
  cartsCountsSelector,
} from "../../store/selector/cart";

import Order from "./Order/index";

const Cart = () => {
  const dispatch = useDispatch();

  const list = useSelector(cartProductSelector);
  const countsProduct = useSelector(cartsCountsSelector);

  /** CALLBACKS */
  const onIncreaseCount = useCallback(
    (idProduct) => () => {
      dispatch(increaseCountProduct(idProduct));
    },
    [dispatch]
  );

  return [
    {
      id: "1",
      imgUrl: "products/apple.png",
      price: 22800,
      title: "Обувь угги UGG Australia!",
    },
  ].map((product) => {
    return (
      <Order
        key={`${product.id}`}
        // countsProduct={countsProduct[product.id]}
        countsProduct={8}
        onIncreaseCount={onIncreaseCount}
        product={product}
      />
    );
  });
};

export default Cart;
