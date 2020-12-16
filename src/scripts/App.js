import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// Importing Views
import IndexApp from "../views/index";
import IDC4U7App from "../views/IDC4U7";

import RESUME from "../assets/documents/Shahrukh_Qureshi_Resume_Updated1.pdf";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/resume"
          exact
          component={() => {
            window.location.replace(RESUME);
          }}
        />
        <Route path="/IDC4U7/QuickDrink" component={IDC4U7App} />
        <Route path="/" component={IndexApp} />
      </Switch>
    </Router>
  );
}

export default App;
