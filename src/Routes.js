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
import Signin from "./Pages/Signin/Signin";
import Top from "./Components/Top/Top";
import TopStore from "./Components/TopStore/TopStore";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/top" component={Top} />
        <Route exact path="/topstore" component={TopStore} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default Routes;
