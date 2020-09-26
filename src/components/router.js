import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import LayoutCommon from "./LayoutCommon";
import Сommodity from "./Сommodity";
import Products from "./Products";
import Catalog from "./Catalog";
import Cart from "./Cart/Cart";
import NotFound from "./NotFound";
import OrderSuccess from "./OrderSuccess";

const ShopRouter = () => (
  <BrowserRouter>
    <Header />
    <LayoutCommon>
      <Switch>
        <Route exact path="/product/:id" component={Сommodity} />
        <Route exact path="/catalog/:product" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Catalog} />
        <Route exact path="/order-success" component={OrderSuccess} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </LayoutCommon>
  </BrowserRouter>
);

export default ShopRouter;
