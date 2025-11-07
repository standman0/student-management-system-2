import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "./layouts/Admin.jsx";
import Auth from "./layouts/Auth.jsx";

// views without layouts

// Keep only auth pages and admin layout; other views removed
// (Landing, Profile, Index removed)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* only admin and auth are available */}
      {/* root -> auth login */}
      <Redirect from="/" to="/auth/login" exact />
      <Redirect from="*" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
