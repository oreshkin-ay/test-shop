import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCatalog } from "../../store/action/catalog";
import { loadingSelector } from "../../store/selector/loading";
import { errorSelector } from "../../store/selector/error";
import Category from "../Category";

import "./catalog.scss";

const Catalog = () => {
  const dispatch = useDispatch();

  /** EFFECT */
  useEffect(() => {
    dispatch(getCatalog());
  }, []);

  const { listCatalog, isFetching, error } = useSelector((state) => {
    return {
      listCatalog: state.catalog.list,
      isFetching: loadingSelector(["GET_CATALOG"], state),
      error: errorSelector(["GET_CATALOG"], state),
    };
  });

  return (
    <main className="Catalog">
      {listCatalog.map((catalog) => {
        return <Category key={catalog.id} category={catalog} />;
      })}
    </main>
  );
};

export default Catalog;
