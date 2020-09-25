import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { buyProduct } from "../../store/action/cart";
import { getProductDetails } from "../../store/action/products";
import { errorSelector } from "../../store/selector/error";
import { loadingSelector } from "../../store/selector/loading";

import "./commodity.scss";

const Сommodity = (props) => {
  const dispatch = useDispatch();

  /** EFFECT */
  useEffect(() => {
    dispatch(getProductDetails(props.match.params.id));
  }, []);

  const { commodity, isFetching, error } = useSelector((state) => {
    return {
      commodity: state.products.details,
      isFetching: loadingSelector(["GET_PRODUCT_DETAILS"], state),
      error: errorSelector(["GET_PRODUCT_DETAILS"], state),
    };
  });

  /** CALLBACKS */
  const onClickBuy = useCallback(() => {
    dispatch(buyProduct(commodity));
  }, [commodity]);


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

  return renderGoods;
};

export default Сommodity;
