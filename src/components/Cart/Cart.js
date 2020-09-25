import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseCountProduct,
  reduceCountProduct,
  removeOrder,
  setCountProduct,
} from "../../store/action/cart";
import {
  cartProductSelector,
  cartsCountsSelector,
} from "../../store/selector/cart";

import Order from "./Order/index";
import Total from "./Total";

import "./cart.scss";

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

  const onReduceCount = useCallback(
    (idProduct) => () => {
      dispatch(reduceCountProduct(idProduct));
    },
    [dispatch]
  );

  const onChangeCount = useCallback(
    (idProduct) => (event) => {
      dispatch(setCountProduct({ [idProduct]: event.target.value }));
    },
    [dispatch]
  );

  const onRemoveOrder = useCallback(
    (idProduct) => () => {
      dispatch(removeOrder(idProduct));
    },
    [dispatch]
  );

  return (
    <>
      <div className={"Wrap-Order"}>
        {list.map((product) => {
          return (
            <Order
              key={`${product.id}`}
              countsProduct={countsProduct[product.id]}
              onIncreaseCount={onIncreaseCount}
              onReduceCount={onReduceCount}
              onChangeCount={onChangeCount}
              onRemoveOrder={onRemoveOrder}
              product={product}
            />
          );
        })}
      </div>
      <Total />
    </>
  );
};

export default Cart;
