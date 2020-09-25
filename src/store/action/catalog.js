import API from "../../service/api";

/**
 * получение каталога
 */
export const getCatalog = () => async (dispatch) => {
  dispatch({ type: "GET_CATALOG_REQUEST" });

  try {
    const catalog = await API.getCatalog();

    dispatch({
      type: "GET_CATALOG_SUCCESS",
      payload: {
        list: catalog,
        total: catalog.length,
      },
    });
  } catch (e) {
    dispatch({ type: "GET_CATALOG_FAILURE", payload: e });
  }
};
