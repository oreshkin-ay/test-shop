import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchPath, useHistory } from "react-router-dom";

import { getProducts } from "../../store/action/products";

import "./products.scss";
import CardProduct from "./CardProduct";
import ErrorBoundaries from "../ErrorBoundaries";

const Products = () => {
  const history = useHistory();
  const { pathname } = history.location;
  const dispatch = useDispatch();
  const match = matchPath(pathname, {
    path: "/catalog/:id",
  });

  /** EFFECT */
  useEffect(() => {
    if (match.params.id) {
      dispatch(getProducts(match.params.id));
    }
  }, [match.params.id, dispatch]);

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
