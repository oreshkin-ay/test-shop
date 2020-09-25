import { combineReducers } from "redux";

import products from "./products";
import catalog from "./catalog";
import loadingReducer from "./loading";
import errorReducer from "./error";
import cart from "./cart";

export default combineReducers({
  catalog,
  products,
  loadingReducer,
  errorReducer,
  cart
});
