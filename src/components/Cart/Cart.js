import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  checkout,
  increaseCountProduct,
  reduceCountProduct,
  removeOrder,
  setCountProduct,
} from "../../store/action/cart";
import {
  cartProductSelector,
  cartsCountsSelector,
  totalSelector,
  checkoutResultSelector,
} from "../../store/selector/cart";

import Order from "./Order/index";
import Total from "./Total";

import "./cart.scss";
import { loadingSelector } from "../../store/selector/loading";
import { errorSelector } from "../../store/selector/error";
import ErrorInfo from "../Message/ErrorInfo/ErrorInfo";
import Loader from "../Loader";

const Cart = () => {
  const dispatch = useDispatch();

  /** SELECTOR */
  const { isFetching, error } = useSelector((state) => {
    return {
      isFetching: loadingSelector(["ORDER"], state),
      error: errorSelector(["ORDER"], state),
    };
  });

  const list = useSelector(cartProductSelector);
  const countsProduct = useSelector(cartsCountsSelector);
  const totalSum = useSelector(totalSelector);
  const checkoutResult = useSelector(checkoutResultSelector);

  /** CALLBACKS */
  const onCheckout = useCallback(() => {
    dispatch(checkout());
  }, [dispatch]);

  const onCheckoutError = useCallback(() => {
    dispatch(checkout(true));
  }, [dispatch]);

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

  if (totalSum === 0) return "Корзина пуста";

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
      <Total
        totalSum={totalSum}
        onCheckout={onCheckout}
        onCheckoutError={onCheckoutError}
      />

      {isFetching && (
        <div className={"Card-Buy__load"}>
          <Loader />
        </div>
      )}

      {error?.isError && (
        <div className={"Card-Buy__error"}>
          <ErrorInfo message={error.message} />
        </div>
      )}

      {checkoutResult && <Redirect to="/order-success" />}
    </>
  );
};

export default Cart;
