import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getProducts } from "../../store/action/products";

import "./products.scss";
import CardProduct from "./CardProduct";
import ErrorBoundaries from "../ErrorBoundaries";

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /** EFFECT */
  useEffect(() => {
    // TODO
    dispatch(getProducts("test-1"));
  }, [history.location.pathname, dispatch]);

  /** SELECTOR */
  const { listProducts } = useSelector((state) => {
    return {
      listProducts: state.products.list,
    };
  });

  return (
    <ErrorBoundaries nameRequest={"GET_PRODUCTS"}>
      <div className="Products">
        <main className="Products-List">
          {listProducts?.map((product) => {
            return <CardProduct key={product.id} product={product} />;
          })}
        </main>
      </div>
    </ErrorBoundaries>
  );
};

export default Products;
