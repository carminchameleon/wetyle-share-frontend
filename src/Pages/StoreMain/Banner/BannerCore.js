import React, { Component } from "react";
import "./BannerCore.scss";

class BannerCore extends Component {
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
    const {
      text,
      subText,
      index,
      dataLength,
      webDestination,
      imageId,
      colorCode
    } = this.props;
    let text1 = this.splitFirst(text);
    let text2 = this.splitSecond(text);
    let subText1 = this.splitFirst(subText);
    let subText2 = this.splitSecond(subText);

    let position = (index / dataLength) * 100;

    return (
      <div className="BannerCore">
        <div className="ban_pic_wrapper">
          <a className="ban_pic_a" href={webDestination}>
            <img
              src={`https://usercontents-c.styleshare.io/images/${imageId}/1920x1080`}
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
                <div className="subtext" style={{ color: colorCode }}>
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
                      backgroundColor: colorCode,
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

export default BannerCore;
