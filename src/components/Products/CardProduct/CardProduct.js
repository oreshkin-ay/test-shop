import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./сardProduct.scss";

import { buyProduct } from "../../../store/action/cart";

const CardProduct = ({ product }) => {
  const { id, price, title, imgUrl } = product;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      if (e.target.matches("button")) {
        dispatch(buyProduct(product));
      } else {
        history.push({
          pathname: `/product/${id}`,
        });
      }
    },
    [dispatch, history, product, id]
  );

  return (
    <article className={"CardProduct"} onClick={handleClick}>
      <img className={"CardProduct-Img"} src={`/${imgUrl}`} alt={title} />
      <div className={"CardProduct-Name Text"}>{title}</div>
      <div className={"Text"}>{price}</div>
      <div className={"CardProduct-Buy"}>
        <button className={"CardProduct-Buy__button"}>Купить</button>
      </div>
    </article>
  );
};

export default React.memo(CardProduct);
