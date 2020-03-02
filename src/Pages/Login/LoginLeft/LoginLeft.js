import React, { Component } from "react";
import "./LoginLeft.scss";

class LoginLeft extends Component {
  state = {
    id: "",
    pwd: "",
    idFocus: false,
    pwdFocus: false
  };
  handleLoginCheck = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login_main_left">
        <form>
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
            <button type="submit" className="login_btn">
              로그인
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginLeft;
