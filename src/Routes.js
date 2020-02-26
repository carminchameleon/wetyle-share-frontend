import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// improt 페이지 목록

import Login from "./Pages/Login/Login";
import StoreMain from "./Pages/StoreMain/StoreMain";
import Detail from "./Pages/StoreDetail/Detail.js";
import Hot from "./Pages/Ootd/Hot/Hot";
import DailyLook from "./Pages/Ootd/DaliyLook/DailyLook";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/storemain" component={StoreMain} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/feed/hot" component={Hot} />
        <Route exact path="/feed/dailylook" component={DailyLook} />

        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default Routes;
