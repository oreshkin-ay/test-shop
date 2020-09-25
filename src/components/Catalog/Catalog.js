import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCatalog } from "../../store/action/catalog";
import ErrorBoundaries from "../ErrorBoundaries";
import Category from "../Category";

import "./catalog.scss";

const Catalog = () => {
  const dispatch = useDispatch();

  /** EFFECT */
  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  const { listCatalog } = useSelector((state) => {
    return {
      listCatalog: state.catalog.list,
    };
  });

  return (
    <ErrorBoundaries nameRequest={"GET_CATALOG"}>
      <main className="Catalog">
        {listCatalog.map((catalog) => {
          return <Category key={catalog.id} category={catalog} />;
        })}
      </main>
    </ErrorBoundaries>
  );
};

export default Catalog;
