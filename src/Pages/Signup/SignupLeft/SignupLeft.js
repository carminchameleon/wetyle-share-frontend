import React, { Component } from "react";

import "./SignupLeft.scss";
// import axios from "axios";

class SignupLeft extends Component {
  state = {
    // typedEmail: "",
    // isDuplicateUser: false,
    id: "",
    // email: "",
    pwd: "",
    pwdcheck: "",
    idFocus: false,
    pwdFocus: false
  };

  handleOnPasswordInput(pwd) {
    this.setState({ pwd: pwd });
  }

  handleOnConfirmPasswordInput(pwdcheck) {
    this.setState({ pwdcheck: pwdcheck });
  }

  doesPasswordMatch() {
    const { pwd, pwdcheck } = this.state;
    return pwd === pwdcheck;
  }

  // confirmPasswordClassName() {
  //   const { pwdcheck } = this.state;

  //   if (pwdcheck) {
  //     return this.doesPasswordMatch() ? "is_valid" : "is_invalid";
  //   }
  // }

  renderFeedbackMessage() {
    const { pwdcheck } = this.state;

    if (pwdcheck) {
      if (!this.doesPasswordMatch()) {
        return (
          <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
        );
      }
    }
  }

  handleLoginCheck = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleLoginLength = e => {
  //   if (e.target.value.length < 3) {
  //     return <div>너무 짧습니다.</div>;
  //   }
  // };

  goToSignup = () => {
    const data = {
      login_id: this.state.id,
      password: this.state.pwd,
      email: this.state.id

      // sessionStorage.setItem("login_id", this.state.id)
      // sessionStorage.setItem("password", this.state.pwd)
    };
    fetch("http://10.58.4.29:8000/user/sign-up/checkid", {
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
    sessionStorage.setItem("login_id", this.state.id);
    sessionStorage.setItem("password", this.state.pwd);
  };

  // handleOnChange(typedEmail) {

  //   this.setState({
  //     [typedEmail.target.name]: typedEmail.target.value
  //   });
  //   axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
  //     const users = response.data;
  //     const isUserFound = users.filter(
  //       user => user.email.toLowerCase() === typedEmail.toLowerCase()
  //     ).length;

  //     isUserFound
  //       ? this.setState({
  //           typedEmail,
  //           isDuplicateUser: true
  //         })
  //       : this.setState({
  //           typedEmail,
  //           isDuplicateUser: false
  //         });
  //   });
  // }

  // emailInputClassName() {
  //   if (this.state.typedEmail) {
  //     return this.state.isDuplicateUser ? "is-invalid" : "is-valid";
  //   }
  //   return "";
  // }

  // renderFeedbackMessage() {
  //   if (this.state.typedEmail) {
  //     return this.state.isDuplicateUser ? (
  //       <div className="invalid-feedback">이미 등록되어 있는 이메일입니다</div>
  //     ) : (
  //       <div className="valid-feedback">사용할 수 있는 이메일입니다</div>
  //     );
  //   }
  // }

  render() {
    const kr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return (
      <div className="signup_main_left">
        <form>
          <label htmlFor="id" className="input_wrapper">
            <input
              ref={ref => (this.input = ref)}
              // type="email"
              id="id"
              name="id"
              value={this.state.id}
              placeholder="ID"
              // onKeyDown={this.handleLoginLength}
              onFocus={this.handleFocusCheck}
              onChange={this.handleLoginCheck}
              className={"info_input ${this.emailInputClassName()}"}
              // type="email"
            />
            {/* {this.renderFeedbackMessage()} */}
          </label>
          <label htmlFor="pwd" className="input_wrapper">
            <input
              id="pwd"
              name="pwd"
              type="password"
              value={this.state.pwd}
              placeholder="비밀번호 (최소 6자)"
              onFocus={this.handleFocusCheck}
              onChange={this.handleLoginCheck}
              onInput={e => this.handleOnPasswordInput(e.target.value)}
              className="info_input1"
            />
            <input
              id="pwdcheck"
              name="pwdcheck"
              type="password"
              value={this.state.pwdcheck}
              placeholder="비밀번호 확인"
              onFocus={this.handleFocusCheck}
              onChange={this.handleLoginCheck}
              onInput={e => this.handleOnConfirmPasswordInput(e.target.value)}
              className="info_input"
              confirmPasswordClassName={this.confirmPasswordClassName}
            />
            {this.renderFeedbackMessage()}
          </label>
          <div className="signin_btn_div">
            <button
              type="submit"
              className="signin_btn"
              onClick={this.goToSignup}
            >
              가입
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupLeft;
