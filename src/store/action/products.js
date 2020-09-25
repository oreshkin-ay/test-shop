import API from "../../service/api";

/**
 * получение списка товаров
 */
export const getProducts = (category) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  try {
    const products = await API.getProducts(category);

    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: {
        list: products,
        total: products.length,
      },
    });
  } catch (e) {
    dispatch({ type: "GET_PRODUCTS_FAILURE", payload: e });
  }
};

/**
 * получение детальной информации
 */
export const getProductDetails = (idProduct) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_DETAILS_REQUEST" });

  try {
    const productsDetails = await API.getDetails(idProduct);

    dispatch({
      type: "GET_PRODUCT_DETAILS_SUCCESS",
      payload: productsDetails,
    });
  } catch (e) {
    dispatch({ type: "GET_PRODUCT_DETAILS_FAILURE", payload: e });
  }
};
