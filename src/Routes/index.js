import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ItemsPage from "../Pages/ItemsPage";
import DetailPage from "../Pages/DetailPage";

const Routes = () => {
  return (
    <Switch>
      <Fragment>
        <Route path="/" component={ItemsPage} exact />
        <Route path="/detail/:id" component={DetailPage} exact />
      </Fragment>
    </Switch>
  );
};

export default Routes;
