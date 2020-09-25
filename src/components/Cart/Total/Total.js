import React from "react";
import { useSelector } from "react-redux";
import { totalSelector } from "../../../store/selector/cart";

import "./total.scss";

const Total = (props) => {
  const { onCheckout, onCheckoutError, totalSum } = props;

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
