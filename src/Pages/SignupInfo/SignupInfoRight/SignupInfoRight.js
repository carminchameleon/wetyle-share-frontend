import React, { Component } from "react";
import kakaoImg from "Img/Kakao.png";
import "./SignupInfoRight.scss";
import TopRight from "Components/Top/TopRight/TopRight";
import TopMid from "Components/Top/TopMid/TopMid";

class SignupInfoRight extends Component {
  state = {
    id: "",
    pwd: "",
    pwdfocus: false,
    idfocus: false,
    sex: 0,
    nick: "",
    year: "",
    month: "",
    day: ""
  };
  // doneSignup = () => {
  //   console.log(sessionStorage.getItem("login_id"));
  // };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className="signup_info_right">
        <ul>
          <li>
            <button style={{ backgroundColor: "#FAE100", color: "black" }}>
              <img className="kakao_img" src={kakaoImg} alt="kakao" />
              <div>
                <span>카카오 정보로 가입하기</span>
              </div>
            </button>
          </li>
        </ul>
        <div className="info_box_wrapper">
          {localStorage.getItem("kakao_id") ? (
            <div className="login_wrapper">
              <div className="info_input_wrapper">
                <input
                  placeholder="ID"
                  className="id_input"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="info_input_wrapper">
                <input
                  placeholder="비밀번호 (최소 6자)"
                  className="pwd_input"
                  name="pwd"
                  value={this.state.pwd}
                  onChange={this.handleChange}
                  style={{
                    borderColor:
                      this.state.pwdfocus && this.state.pwd.length < 6
                        ? "red"
                        : "#c9cdd2"
                  }}
                  onFocus={() => {
                    this.setState({ pwdfocus: true });
                  }}
                  onBlur={() => {
                    this.setState({ pwdfocus: false });
                  }}
                ></input>
                {this.state.pwd.length < 6 && this.state.pwdfocus ? (
                  <span>비밀번호가 너무 짧습니다</span>
                ) : null}
              </div>
            </div>
          ) : null}
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
              {localStorage.getItem("kakao_email") ? (
                <div>{localStorage.getItem("kakao_email")}</div>
              ) : (
                <input
                  className="person email"
                  name="email"
                  type="text"
                  placeholder="이메일을 입력하세요."
                  // onChange={this.handleLoginCheck}
                />
              )}
            </div>
            <div className="box 3">
              <span className="box_title two_words">성별</span>
              <div className="gender_man">
                <input
                  type="radio"
                  name="sex"
                  value={this.state.sex}
                  onClick={() => {
                    this.setState({ sex: 0 }, () => {
                      this.props.handleGender();
                    });
                  }}
                />
                남
              </div>
              <div className="gender_woman">
                <input
                  type="radio"
                  name="sex"
                  defaultChecked="false"
                  value={this.state.sex}
                  onClick={() => {
                    this.setState({ sex: 1 }, () => {
                      this.props.handleGender();
                    });
                  }}
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
                name="year"
                value={this.state.year}
                onChange={this.handleChange}
                onFocus={this.handleFocusCheck}
                // onChange={this.handleLoginCheck}
              />
              년
              <div className="bd_month">
                <input
                  className="birthdate month"
                  type="text"
                  maxLength="2"
                  name="month"
                  value={this.state.month}
                  onChange={this.handleChange}
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
                  name="day"
                  onChange={this.handleChange}
                  value={this.state.day}
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
            과
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
