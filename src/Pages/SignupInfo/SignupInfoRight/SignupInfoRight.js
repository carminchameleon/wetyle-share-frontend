import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "./SignupInfoRight.scss";

class SignupInfoRight extends Component {
  // doneSignup = () => {
  //   console.log(sessionStorage.getItem("login_id"));
  // };

  render() {
    console.log(this.props);
    return (
      <div className="signup_info_right">
        <ul>
          <li>
            <button>
              <FontAwesomeIcon
                icon={faFacebookF}
                size="2x"
                style={{ margin: "0 10px" }}
              />
              <div>
                <span>페이스북 정보 불러오기</span>
              </div>
            </button>
          </li>
        </ul>
        <div className="info_box_wrapper">
          <div className="info_box">
            <div className="box 1">
              <span className="box_title">닉네임</span>
              <input
                className="person nickname"
                type="text"
                placeholder="닉네임을 입력하세요."
                maxLength="20"
                // onFocus={this.handleFocusCheck}
                // onChange={this.handleLoginCheck}
              />
            </div>
            <div className="box 2">
              <span className="box_title">이메일</span>
              <input
                className="person email"
                name="email"
                type="text"
                placeholder="이메일을 입력하세요."
                // onChange={this.handleLoginCheck}
              />
            </div>
            <div className="box 3">
              <span className="box_title two_words">성별</span>
              <div className="gender_man">
                <input
                  type="radio"
                  name="gender"
                  value="man"
                  onClick={this.props.handleGender}
                />
                남
              </div>
              <div className="gender_woman">
                <input
                  type="radio"
                  name="gender"
                  value="woman"
                  defaultChecked="false"
                  onClick={this.props.handleGender}
                />
                여
              </div>
            </div>
            <div className="last_box">
              <span className="box_title two_words">생일</span>
              <input
                className="birthdate year"
                type="text"
                maxLength="4"
                onFocus={this.handleFocusCheck}
                // onChange={this.handleLoginCheck}
              />
              년
              <div className="bd_month">
                <input
                  className="birthdate month"
                  type="text"
                  maxLength="2"
                  onFocus={this.handleFocusCheck}
                  // onChange={this.handleLoginCheck}
                />
                월
              </div>
              <div className="bd_day">
                <input
                  className="birthdate day"
                  type="text"
                  maxLength="2"
                  onFocus={this.handleFocusCheck}
                  // onChange={this.handleLoginCheck}
                />
                일
              </div>
            </div>
          </div>
          <div className="policy">
            완료 버튼을 누르면{" "}
            <u>
              <a href="https://www.styleshare.kr/privacy/">개인정보보호정책</a>
            </u>
            과{" "}
            <u>
              <a href="https://www.styleshare.kr/terms-of-use/">
                서비스이용약관
              </a>
            </u>
            에 동의한 것으로 간주합니다.
          </div>
          <div className="done_wrapper">
            <button className="done" onClick={this.doneSignup}>
              다 했어요
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupInfoRight;
