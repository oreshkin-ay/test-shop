import React, { useCallback } from "react";

import "./order.scss";

import remove from "./../../../assets/remove.svg";

const Order = (props) => {
  const { onIncreaseCount, product, countsProduct } = props;
  const { id, imgUrl, title, price } = product;

  const onChangeCount = useCallback((event) => {
    // updateQuantity(event.target.value);
  }, []);

  return (
    <div className={"Wrap-Order"}>
      <div className={"Order"}>
        <img className={"Order-Img"} src={`/${imgUrl}`} alt={title} />

        <div className={"Order-Details"}>
          <div className={"Order-Title"}>{title}</div>

          <div className="Quantity">
            <button
              className="Quantity-button"
              onClick={onIncreaseCount(product.id)}
            >
              <span aria-hidden="true">-</span>
            </button>

            <input
              className="Quantity-input"
              name="number"
              type="number"
              min="1"
              value={countsProduct}
              size="2"
              onChange={onChangeCount}
            />

            <button
              className="Quantity-button"
              onClick={onIncreaseCount(product.id)}
            >
              <span aria-hidden="true">+</span>
            </button>
          </div>

          <div>{price}</div>
        </div>

        <img className={"Order-Remove"} src={remove} alt="remove" />
      </div>
    </div>
  );
};

export default React.memo(Order);
