import API from "../../service/api";

/**
 * получение списка товаров
 */
export const getGoods = () => async (dispatch) => {
  dispatch({ type: "GET_GOODS_REQUEST" });

  try {
    const goods = await API.getGoods();

    dispatch({
      type: "GET_GOODS_SUCCESS",
      payload: {
        goods,
        total: goods.length,
      },
    });
  } catch (e) {
    dispatch({ type: "GET_GOODS_FAILURE", payload: e });
  }
};

/**
 * получение детальной информации
 */
export const getInfo = (idGoods) => async (dispatch) => {
  dispatch({ type: "GET_GOODS_DETAILS_REQUEST" });

  try {
    const responses = await API.getDetails(idGoods);

    dispatch({
      type: "GET_GOODS_DETAILS_SUCCESS",
      // payload: details,
    });
  } catch (e) {
    dispatch({ type: "GET_GOODS_DETAILS_FAILURE", payload: e });
  }
};
