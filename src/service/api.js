import { GOODS } from "./mock";

/**
 * запрос товаров
 */
const getGoods = () => {
  // TODO Add Promise + SetTimiout
  return GOODS;
};

/**
 * запрос информации по товару
 */
const getDetails = async (idGoods) => {
  return {};
};

export default {
  getGoods,
  getDetails,
};
