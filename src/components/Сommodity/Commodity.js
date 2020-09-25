import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { buyProduct } from "../../store/action/cart";
import { getProductDetails } from "../../store/action/products";
import ErrorBoundaries from "../ErrorBoundaries";

import "./commodity.scss";

const Сommodity = (props) => {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  /** EFFECT */
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  /** SELECTOR */
  const { commodity } = useSelector((state) => {
    return {
      commodity: state.products.details,
    };
  });

  /** CALLBACKS */
  const onClickBuy = useCallback(() => {
    dispatch(buyProduct(commodity));
  }, [commodity, dispatch]);

  const renderGoods = useMemo(() => {
    return (
      <div className={"Details Details-Singly"}>
        <div className={"Details-Main"}>
          <img
            className="Details-Logo"
            src={`/${commodity?.imgUrl}`}
            alt={commodity?.brand}
          />
          <div className="Details-Info">
            <div className="Details-InfoName">{commodity?.brand}</div>
            <div>{commodity?.title}</div>
            <div className="Details-InfoDescription">
              {commodity?.description}
            </div>
          </div>
        </div>

        <div className="Details-Buy" onClick={onClickBuy}>
          <button className={"Details-Buy__button"}>Купить</button>
        </div>
      </div>
    );
  }, [commodity, onClickBuy]);

  return (
    <ErrorBoundaries nameRequest={"GET_PRODUCT_DETAILS"}>
      {renderGoods}
    </ErrorBoundaries>
  );
};

export default Сommodity;
