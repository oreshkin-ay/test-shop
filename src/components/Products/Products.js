import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getProducts } from "../../store/action/products";
import { loadingSelector } from "../../store/selector/loading";
import { errorSelector } from "../../store/selector/error";

import "./products.scss";
import CardProduct from "./CardProduct";

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /** EFFECT */
  useEffect(() => {
    // TODO
    dispatch(getProducts("test-1"));
  }, [history.location.pathname, dispatch]);

  /** SELECTOR */
  const { listProducts, isFetching, error } = useSelector((state) => {
    return {
      listProducts: state.products.list,
      isFetching: loadingSelector(["GET_PRODUCTS"], state),
      error: errorSelector(["GET_PRODUCTS"], state),
    };
  });

  return (
    <div className="Products">
      <main className="Products-List">
        {listProducts?.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
      </main>
    </div>
  );
};

export default Products;
