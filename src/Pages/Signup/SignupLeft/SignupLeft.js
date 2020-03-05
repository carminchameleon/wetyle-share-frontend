import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SignupLeft.scss";

class SignupLeft extends Component {
  state = {
    id: "",
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

  handleIdLength = () => {
    if (this.state.id.length > 0 && this.state.id.length < 3) {
      return <div className="short_id">너무 짧습니다.(3~32자)</div>;
    }
  };

  handlePwdLength = () => {
    if (this.state.pwd.length > 0 && this.state.pwd.length < 6) {
      return <div className="short_pwd">너무 짧습니다.(7~18자)</div>;
    }
  };

  goToSignup = e => {
    e.preventDefault();

    const data = {
      login_id: this.state.id
    };

    fetch("http://10.58.5.123:8000/user/sign-up/checkid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem("login_id", this.state.id);
          sessionStorage.setItem("password", this.state.pwd);
          this.props.history.push("/signupinfo");
        } else if (this.state.pwd !== this.state.pwdcheck) {
          alert("비밀번호를 확인해주세요.");
        } else {
          alert("이미 존재하는 id/email입니다.");
        }
      })
      // .then(res => {
      //   console.log("res: ", res);
      //   if (!res.message) {
      //     localStorage.setItem("login_id", this.state.id);
      //     localStorage.setItem("password", this.state.pwd);
      //     this.props.history.push("/signupinfo");
      //   } else {
      //     alert("이미 존재하는 id/email입니다.");
      //   }
      // })
      .catch(error => console.error(error));
  };

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
              // onInput={this.handleIdLength}
              onFocus={this.handleFocusCheck}
              onChange={this.handleLoginCheck}
              className={"info_input ${this.emailInputClassName()}"}
              maxLength="32"

              // type="email"
            />
            {this.handleIdLength()}
          </label>
          <label htmlFor="pwd" className="input_wrapper">
            <input
              id="pwd"
              name="pwd"
              type="password"
              value={this.state.pwd}
              placeholder="비밀번호 (최소 7자)"
              onFocus={this.handleFocusCheck}
              onChange={this.handleLoginCheck}
              onInput={e => this.handleOnPasswordInput(e.target.value)}
              className="info_input1"
              maxLength="18"
            />
            {this.handlePwdLength()}

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
              maxLength="18"
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

export default withRouter(SignupLeft);
