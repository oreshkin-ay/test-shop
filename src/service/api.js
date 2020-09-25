import { COMMODITY_DETAILS } from "./mockCommodity";
import { CATALOG } from "./mockCatalog";
import { PRODUCTS } from "./mockProducts";

/**
 * запрос каталога
 */
const getCatalog = () => {
  // TODO Add Promise
  return CATALOG;
};

/**
 * запрос товаров
 */
const getProducts = (category) => {
  return PRODUCTS[category];
};

/**
 * запрос информации по товару
 */
const getDetails = async (idProduct) => {
  return COMMODITY_DETAILS[idProduct];
};

/**
 * оформить
 */
const сheckoutOrder = async (idProduct) => {};

export default {
  getCatalog,
  getProducts,
  getDetails,
  сheckoutOrder,
};
