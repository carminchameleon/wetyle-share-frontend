import React from "react";
import man from "../../../Img/man.png";
import woman from "../../../Img/woman.png";
// import src from "*.bmp";
import "./SignupInfoLeft.scss";
// import SignupInfoRight from "../SignupInfoRight/SignupInfoRight";

class SignupInfoLeft extends React.Component {
  state = {
    visible: false
  };

  render() {
    return (
      <div className="signup_info_left">
        <div className="info_left_wrapper">
          <div className="info_left_pic">
            {this.props.genderCheck === true ? (
              <img src={man} />
            ) : (
              <img src={woman} />
            )}
            {/* <img
              className={
                this.props.genderSelector ? (src = { man }) : (src = { woman })
              }
            ></img> */}
          </div>
          <button
            className="pic_selector"
            style={{
              backgroundColor: this.state.visible ? "#ebebeb" : "white"
            }}
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          >
            사진선택
          </button>
        </div>
      </div>
    );
  }
}

export default SignupInfoLeft;
