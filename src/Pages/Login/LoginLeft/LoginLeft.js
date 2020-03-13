import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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

  handleLoginCheck = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  goToSignin = e => {
    e.preventDefault();

    const data = {
      login_id: this.state.id,
      password: this.state.pwd,
      email: this.state.id
    };

    fetch("http://52.78.11.154:8000/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json)
      .then(res => {
        if (res.status === 400) {
          alert("id 혹은 pwd를 확인하세요.");
        } else if (res.status === 200) {
          this.props.history.push("/");
        } else {
          alert("id 혹은 pwd를 확인하세요.");
        }

        // (res.token) {
        //   localStorage.setItem("token", res.token);
        //   this.props.history.push("/");
        // } else {
        //   alert("아이디 혹은 비밀번호를 확인해주세요.");
        // }
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

export default withRouter(LoginLeft);
