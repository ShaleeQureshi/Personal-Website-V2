import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// Importing Views
import IndexApp from "../views/index";
import SoftwareApp from "../views/software";
import LoginApp from "../views/login";
import PortalApp from "../views/portal";
import PortalDatabaseApp from "../views/portal-database";
import IDC4U7App from "../views/IDC4U7";

// Importing Static files
import RESUME from "../assets/documents/Shahrukh_Qureshi_Resume_Updated1.pdf";
import VIDEO from "../assets/images/IDC4U7/Marketing Video.mp4";

// Importing Essential Scripts
import { AuthProvider } from "./firebase/auth";
import PrivateRoute from "./private-route";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route
            path="/resume"
            exact
            component={() => {
              window.location.replace(RESUME);
            }}
          />
          <Route path="/IDC4U7/QuickDrink" exact component={IDC4U7App} />
          <Route
            path="/IDC4U7/QuickDrink/Video"
            exact
            component={() => {
              window.location.replace(VIDEO);
            }}
          />
          <Route
            path={[
              "/software",
              "/projects",
              "/softwarerepository",
              "/software-repository",
              "/softwarerepo",
              "/software-repo",
            ]}
            exact
            component={SoftwareApp}
          />
          <Route
            path={["/login", "/signin", "/sign-in"]}
            exact
            component={LoginApp}
          />
          <PrivateRoute path="/portal/:user" exact component={PortalApp} />
          <PrivateRoute
            path="/portal/:user/database"
            exact
            component={PortalDatabaseApp}
          />
          <Route path="/" component={IndexApp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
