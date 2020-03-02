import React from "react";
import SignupInfoLeft from "./SignupInfoLeft/SignupInfoLeft";
import SignupInfoRight from "./SignupInfoRight/SignupInfoRight";
import "./SignupInfo.scss";

document.title = "회원가입 정보 | 스타일쉐어";
class SignupInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      genderCheck: false
    };
  }

  handleGender = () => {
    this.setState({
      genderCheck: !this.state.genderCheck
    });
  };

  render() {
    console.log(this.state.genderCheck);
    return (
      <div className="signup_info_wrapper">
        <div className="signin_info_bg_img">
          <div className="signin_info_bg"></div>
        </div>
        <div className="signin_info_body_wrapper">
          <div className="signin_info_body">
            <div className="signin_info_box">
              <main>
                <div className="signin_info_main">
                  <SignupInfoLeft genderCheck={this.state.genderCheck} />
                  <SignupInfoRight handleGender={this.handleGender} />
                </div>
              </main>
              <footer> </footer>
            </div>
            <div className="etc_info"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupInfo;
