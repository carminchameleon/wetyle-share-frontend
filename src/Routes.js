import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// improt 페이지 목록
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Detail from "./Pages/StoreDetail/Detail.js";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail" component={Detail} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default Routes;
