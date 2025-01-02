import React, { useState } from "react";

import MainHome from "./HomePageContent/MainHome";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import OrderMain from "./OrderPizzaPage/OrderMain";

import OrderSummary from "./OrderSummary/OrderSummary";

function MainComponent() {
  return (
    <div>
      <Switch>
        <Route path="/" component={MainHome} exact />
        <Route path="/order/:pizzaId" component={OrderMain} />
        <Route path="/order-summary" component={OrderSummary} />
      </Switch>
    </div>
  );
}

export default MainComponent;
