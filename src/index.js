import React from "react";
import "assets/css/ordering-system-frontend.css?v=1.8.0";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "../src/components/Protected/ProtectedComponent";

// core components
import Admin from "layouts/Admin.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import history from "./history.js";
import RegisterUser from "./views/Signup/RegisterUser.jsx";
import Login from "./views/Login/Login.jsx";

import "assets/css/ordering-system-frontend.css";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={Login} />
     
      <Redirect from="/" to="/register"/>
    
    </Switch>
  </Router>,
  document.getElementById("root")
);
