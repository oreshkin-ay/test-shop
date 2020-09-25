import React, { useCallback, useRef } from "react";

import "./order.scss";

import remove from "./../../../assets/remove.svg";

const Order = (props) => {
  const {
    onIncreaseCount,
    onChangeCount,
    onReduceCount,
    product,
    countsProduct,
    onRemoveOrder,
  } = props;
  const { id, imgUrl, title, price } = product;

  return (
    <div className={"Order"}>
      <img className={"Order-Img"} src={`/${imgUrl}`} alt={title} />

      <div className={"Order-Title"}>{title}</div>

      <div className="Quantity">
        <button className="Quantity-button" onClick={onReduceCount(id)}>
          <span aria-hidden="true">-</span>
        </button>

        <input
          className="Quantity-input"
          name="number"
          type="number"
          min="1"
          value={countsProduct}
          size="2"
          onChange={onChangeCount(id)}
        />

        <button className="Quantity-button" onClick={onIncreaseCount(id)}>
          <span aria-hidden="true">+</span>
        </button>
      </div>

      <div className={"Order-CountItem"}>{price * countsProduct}</div>

      <img
        className={"Order-Remove"}
        src={remove}
        alt="remove"
        onClick={onRemoveOrder(id)}
      />
    </div>
  );
};

export default React.memo(Order);
