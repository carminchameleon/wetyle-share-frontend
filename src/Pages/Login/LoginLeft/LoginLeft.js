import React, { Component } from "react";
import "./LoginLeft.scss";

class LoginLeft extends Component {
  state = {
    // emailFormCheck: true,
    id: "",
    pwd: "",
    // email: "",
    idFocus: false,
    pwdFocus: false
  };

  // emailFormChecker = e => {
  //   if (e.target.value.length > 0) {
  //     this.setState({
  //       emailFormCheck: true
  //     });
  //   }
  //   if (!e.target.value.includes("@", ".")) {
  //     this.setState({
  //       emailFormCheck: true
  //     });
  //   }
  //   if (!e.target.value.includes("@")) {
  //     this.setState({
  //       emailFormCheck: false
  //     });
  //   }
  // };

  handleLoginCheck = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  goToSignin = () => {
    const data = {
      login_id: this.state.id,
      password: this.state.pwd,
      email: this.state.id
    };

    fetch("http://10.58.4.29:8000/user/sign-in/checkid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      // .then(console.log("dddd"))
      .then(res => {
        if (res.token) {
          localStorage.setItem("token", res.token);
        }
      });
  };

  render() {
    return (
      <div className="login_main_left">
        <div>
          <label htmlFor="id" className="input_wrapper">
            <input
              ref={ref => (this.input = ref)}
              id="id"
              name="id"
              value={this.state.id}
              placeholder="ID/Email"
              onChange={this.handleLoginCheck}
              className="info_input"
            />
            {/* {this.state.emailFormCheck === false ? (
              <div>
                <div>
                  <input
                    className="info_input"
                    ref={ref => (this.input = ref)}
                    id="id"
                    name="id"
                    value={this.state.id}
                    placeholder="이메일 주소가 올바르지 않습니다."
                    onFocus={this.handleFocusCheck}
                    onChange={this.handleLoginCheck}
                    onKeyDown={this.emailFormChecker}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <input
                    className="info_input1"
                    ref={ref => (this.input = ref)}
                    id="id"
                    name="id"
                    value={this.state.id}
                    placeholder="ID/Email"
                    onFocus={this.handleFocusCheck}
                    onChange={this.handleLoginCheck}
                    onKeyDown={this.emailFormChecker}
                  />
                </div>
              </div>
            )} */}
          </label>
          <div className="forgot_info_div">
            <a className="forgot_info" href="/">
              ID가 기억이 나지 않으세요?
            </a>
          </div>
          <label htmlFor="pwd" className="input_wrapper">
            <input
              id="pwd"
              name="pwd"
              type="password"
              value={this.state.pwd}
              placeholder="비밀번호를 입력해주세요"
              onChange={this.handleLoginCheck}
              className="info_input"
            ></input>
          </label>
          <div className="forgot_info_div">
            <a className="forgot_info" href="/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
          <div className="login_btn_div">
            <button className="login_btn" onClick={this.goToSignin}>
              로그인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginLeft;
