import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { getGoods } from "../../store/action/goods";

import "./goods.scss";

const Goods = () => {
  const dispatch = useDispatch();

  /** EFFECT */
  useEffect(() => {
    dispatch(getGoods());
  }, []);

  /** CALLBACKS */
  const renderGoods = useMemo(() => {
    return null;
  }, []);

  return renderGoods;
};

export default Goods;
