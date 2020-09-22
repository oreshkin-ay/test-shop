import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page from "./Page";

const GoodsRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Page} />
    </Switch>
  </BrowserRouter>
);

export default GoodsRouter;
