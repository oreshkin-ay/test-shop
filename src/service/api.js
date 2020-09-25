import { COMMODITY_DETAILS } from "./mockCommodity";
import { CATALOG } from "./mockCatalog";
import { PRODUCTS } from "./mockProducts";

const fetch = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
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
const getDetails = async (idProduct) => {
  return fetch(COMMODITY_DETAILS[idProduct]);
};

/**
 * оформить
 */
const сheckoutOrder = async (idProduct) => {

};

export default {
  getCatalog,
  getProducts,
  getDetails,
  сheckoutOrder,
};
