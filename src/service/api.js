import { COMMODITY_DETAILS } from "./mockCommodity";
import { CATALOG } from "./mockCatalog";
import { PRODUCTS } from "./mockProducts";

const fetch = (data, isError = false) => {
  return new Promise((resolve, reject) => {
    if (!isError) setTimeout(() => resolve(data), 2000);
    setTimeout(() => reject(data), 2000);
  });
};

/**
 * запрос каталога
 */
const getCatalog = () => {
  return fetch(CATALOG);
};

/**
 * запрос товаров
 */
const getProducts = (category) => {
  return fetch(PRODUCTS[category]);
};

/**
 * запрос информации по товару
 */
const getDetails = (idProduct) => {
  return fetch(COMMODITY_DETAILS[idProduct]);
};

/**
 * оформить
 */
const сheckoutOrder = (cart, isError) => {
  return fetch(cart, isError);
};

export default {
  getCatalog,
  getProducts,
  getDetails,
  сheckoutOrder,
};
