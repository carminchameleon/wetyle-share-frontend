import React, { Component } from "react";
import "./SigninLeft.scss";

class SigninLeft extends Component {
  state = {
    id: "",
    pwd: "",
    pwdcheck: "",
    idFocus: false,
    pwdFocus: false
  };
  handleLoginCheck = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const kr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return (
      <div className="signin_main_left">
        <form>
          <label htmlFor="id" className="input_wrapper">
            <input
              ref={ref => (this.input = ref)}
              id="id"
              name="id"
              value={this.state.id}
              placeholder="ID"
              onFocus={this.handleFocusCheck}
              onChange={this.handleLoginCheck}
              className="info_input"
            />
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
              className="info_input1"
            ></input>
            <input
              id="pwdcheck"
              name="pwdcheck"
              type="password"
              value={this.state.pwdcheck}
              placeholder="비밀번호 확인"
              onFocus={this.handleFocusCheck}
              onChange={this.handleLoginCheck}
              className="info_input"
            ></input>
          </label>
          <div className="signin_btn_div">
            <button type="submit" className="signin_btn">
              가입
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SigninLeft;
