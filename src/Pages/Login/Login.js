import React from "react";

import LoginLeft from "./LoginLeft/LoginLeft";
import LoginRight from "./LoginRight/LoginRight";
import "./Login.scss";

document.title = "로그인 | 스타일쉐어";
class Login extends React.Component {
  render() {
    return (
      <div className="login_wrapper">
        <div className="login_bg_img">
          <div className="login_bg"></div>
        </div>
        <div className="login_body_wrapper">
          <div className="login_body">
            <div className="login_box">
              <header>
                <div className="login_title"></div>
                <p>로그인</p>
              </header>
              <main>
                <div className="login_main">
                  <LoginLeft />
                  <LoginRight />
                </div>
              </main>
              <footer>
                <div>ID가 없으세요?</div>
                <a>여기서 가입</a>
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

export default Login;
