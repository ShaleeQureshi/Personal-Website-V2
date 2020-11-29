import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// Importing Views
import IndexApp from "../views/index";

import RESUME from "../assets/documents/Shahrukh_Qureshi_Resume.pdf";

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
        <Route path="/" component={IndexApp} />
      </Switch>
    </Router>
  );
}

export default App;
