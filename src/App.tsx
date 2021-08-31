import React from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import history from "@app/shared/utils/history";

import Home from "@app/pages/home/home";
import Dashboard from "@app/pages/dashboard/dashboard";

import routes from "@app/shared/constants/routes";

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path={routes.DASHBOARD} component={Dashboard} />
          <Route path={routes.HOME} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
