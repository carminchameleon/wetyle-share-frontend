import React, { Component } from "react";
import kakaoImg from "Img/Kakao.png";
import man from "../../../Img/man.png";
import woman from "../../../Img/woman.png";
import "./SignupInfoRight.scss";

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
    day: "",
    userIconUrl: "",
    userIconFile: null,
    resultUrl: "",
    regexp: /^[0-9\b]+$/
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignUp = () => {
    fetch("http://52.78.11.154:8000/user/kakao/sign-in", {
      method: "POST",
      headers: {
        Authorization: this.state.kakaoToken
      },
      body: JSON.stringify({})
    });
  };
  handlePost = () => {
    const formData = new FormData();
    formData.append("filename", this.state.userIconFile);

    fetch(`http://10.58.2.111:8000/card/upload/image`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Impvbmd0a2ZrZCJ9.TburqDu3-81bWqGKbRutBcqHADIB955vipm-oJbRbu4"
      },
      body: formData
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          resultUrl: res.image_url_list
        })
      )
      .then(res => console.log(res));
  };
  handleChangeFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    this.setState(
      {
        userIconFile: file
      },
      () => {
        this.handlePost();
      }
    );
    reader.onloadend = e => {
      this.setState({
        userIconUrl: e.target.result
      });
    };
  };

  render() {
    console.log(this.props);
    return (
      <>
        <div className="signup_info_left">
          <div className="info_left_wrapper">
            <div className="info_left_pic">
              <img
                alt="img"
                className="user_icon_img"
                src={this.state.userIconUrl ? this.state.userIconUrl : man}
              />
            </div>
            <label for="user_icon" onChange={this.handleChangeFile}>
              <input
                id="user_icon"
                type="file"
                className="pic_selector"
                style={{
                  backgroundColor: this.state.visible ? "#ebebeb" : "white"
                }}
                onClick={() => {
                  this.setState({ visible: !this.state.visible });
                }}
              ></input>
              사진선택
            </label>
          </div>
        </div>
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
            </div>
            <div className="last_box">
              <span className="box_title two_words">생일</span>
              <input
                className="birthdate year"
                name="year"
                value={this.state.year}
                onChange={this.handleYear}
                type="text"
                maxLength="4"
                name="year"
                value={this.state.year}
                onChange={this.handleChange}
                onFocus={this.handleFocusCheck}
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
              <div className="last_box">
                <span className="box_title two_words">생일</span>
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
                년
                <div className="bd_month">
                  <input
                    className="birthdate month"
                    type="number"
                    maxLength="2"
                    name="month"
                    value={this.state.month}
                    onChange={e => {
                      if (e.target.value.length < 3) {
                        this.setState({ month: e.target.value });
                      }
                    }}
                  />
                  월
                </div>
                <div className="bd_day">
                  <input
                    className="birthdate day"
                    type="number"
                    maxLength="2"
                    name="day"
                    onChange={e => {
                      if (e.target.value.length < 3) {
                        this.setState({ day: e.target.value });
                      }
                    }}
                    value={this.state.day}
                  />
                  일
                </div>
              </div>
            </div>
            <div className="policy">
              완료 버튼을 누르면
              <u>
                <a href="https://www.styleshare.kr/privacy/">
                  개인정보보호정책
                </a>
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
      </>
    );
  }
}

export default SignupInfoRight;
