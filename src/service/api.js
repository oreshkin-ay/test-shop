import { COMMODITY_DETAILS } from "./mockCommodity";
import { CATALOG } from "./mockCatalog";
import { PRODUCTS } from "./mockProducts";

/**
 * эмуляция запроса
 */
const fetch = (data, isError = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isError) resolve(data);
      reject(data);
    }, 1000);
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
 * оформление покупки
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
