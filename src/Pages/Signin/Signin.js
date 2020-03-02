import React from "react";
import { Link } from "react-router-dom";

import SigninLeft from "./SigninLeft/SigninLeft";
import SigninRight from "./SigninRight/SigninRight";
import "./Signin.scss";

document.title = "회원가입 | 스타일쉐어";
class Signin extends React.Component {
  render() {
    return (
      <div className="signin_wrapper">
        <div className="signin_bg_img">
          <div className="signin_bg"></div>
        </div>
        <div className="signin_body_wrapper">
          <div className="signin_body">
            <div className="signin_box">
              <header>
                <div className="signin_title"></div>
                <p>가입</p>
              </header>
              <main>
                <div className="signin_main">
                  <SigninLeft />
                  <SigninRight />
                </div>
              </main>
              <footer>
                <div className="have_id">이미 계정을 갖고 계시다구요?</div>
                <Link to="/login">
                  <a>여기서 로그인</a>
                </Link>
              </footer>
            </div>
            <div className="etc_info">
              <a>StyleShare에 대하여</a>
              <a>개인정보보호정책</a>
              <a>이용약관</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
