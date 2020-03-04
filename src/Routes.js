import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// improt 페이지 목록

import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import SignupInfo from "./Pages/SignupInfo/SignupInfo";

// import SigninNext from "./Pages/SigninNext/SigninNext";
import StoreMain from "./Pages/StoreMain/StoreMain";
import Detail from "./Pages/StoreDetail/Detail.js";
import Hot from "./Pages/Ootd/Hot/Hot";
import DailyLook from "./Pages/Ootd/DaliyLook/DailyLook";
import Beauty from "./Pages/Ootd/Beauty/Beauty";
import New from "./Pages/Ootd/New/New";
import Qna from "./Pages/Ootd/Qna/Qna";
import Myhome from "./Pages/Ootd/Myhome/Myhome";
import Upload from "./Pages/Ootd/Upload/Upload";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DailyLook} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signupinfo" component={SignupInfo} />

        {/* <Route exact path="/signinnext" component={SigninNext} /> */}
        <Route exact path="/storemain" component={StoreMain} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/feed/hot" component={Hot} />
        <Route exact path="/feed/dailylook" component={DailyLook} />
        <Route exact path="/feed/beauty" component={Beauty} />
        <Route exact path="/feed/new" component={New} />
        <Route exact path="/feed/qna" component={Qna} />
        <Route exact path="/feed/my-home" component={Myhome} />
        <Route exact path="/upload" component={Upload} />

        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default Routes;
