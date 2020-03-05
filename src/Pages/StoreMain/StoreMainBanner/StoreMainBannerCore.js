import React, { Component } from "react";
import "./StoreMainBannerCore.scss";

class StoreMainBannerCore extends Component {
  splitFirst = sentence => {
    const position = sentence.indexOf("\r\n");
    const first = sentence.slice(0, position);
    return first;
  };

  splitSecond = sentence => {
    const position = sentence.indexOf("\r\n");
    const second = sentence.slice(position + 2);
    return second;
  };

  render() {
    let text1 = this.splitFirst(this.props.text);
    let text2 = this.splitSecond(this.props.text);
    let subText1 = this.splitFirst(this.props.subText);
    let subText2 = this.splitSecond(this.props.subText);
    console.log("시범적", text1);
    console.log(text2);
    console.log(subText1);
    console.log(subText2);
    let position = (this.props.index / this.props.dataLength) * 100;

    return (
      <div className="StoreMainBannerCore">
        <div className="ban_pic_wrapper">
          <a className="ban_pic_a" href={this.props.webDestination}>
            <img
              src={`https://usercontents-c.styleshare.io/images/${this.props.imageId}/1920x1080`}
              alt=""
            ></img>
          </a>
        </div>
        <div className="content_container">
          <div className="content_text">
            <div className="left_empty"></div>
            <div className="right_box">
              <div className="text_box">
                <div className="text" style={{ color: this.props.colorCode }}>
                  {text1}
                  <br></br>
                  {text2}
                </div>
              </div>
              <div className="subtext_box">
                <div
                  className="subtext"
                  style={{ color: this.props.colorCode }}
                >
                  {subText1}
                  <br></br>
                  {subText2}
                </div>
              </div>
            </div>
          </div>
          <div className="content_line">
            <div className="line_front"></div>
            <div className="line_middle">
              <div className="line_middle_inner">
                <div className="line_middle_indicator">
                  <div
                    className="line_middle_bold"
                    style={{
                      backgroundColor: this.props.colorCode,
                      left: `${position}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="line_back"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreMainBannerCore;
