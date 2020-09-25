import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../../store/action/cart";
import {
  checkoutResultSelector,
  totalSelector,
} from "../../../store/selector/cart";

import "./total.scss";

const Total = (props) => {
  const dispatch = useDispatch();

  /** SELECTOR */
  const totalSum = useSelector(totalSelector);
  const checkoutResult = useSelector(checkoutResultSelector);
  console.log("checkoutResult", checkoutResult);

  /** CALLBACKS */
  const onCheckout = useCallback(() => {
    dispatch(checkout());
  }, [dispatch]);

  const onCheckoutError = useCallback(() => {
    dispatch(checkout(false));
  }, [dispatch]);

  return (
    <div className={"Wrap-Total"}>
      <div className={"Total"}>
        <div className={"Total-Sum"}>Сумма: {totalSum}</div>
        <div className={"Total-Checkout"}>
          <button
            className={"Total-Checkout__button Total-Checkout__button-success"}
            onClick={onCheckout}
          >
            Оформить
          </button>
          <button
            className={"Total-Checkout__button Total-Checkout__button-error"}
            onClick={onCheckoutError}
          >
            Оформить с ошибкой (Тест)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Total;
