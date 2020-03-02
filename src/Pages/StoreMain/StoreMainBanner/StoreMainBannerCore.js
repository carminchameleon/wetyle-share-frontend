import React, { Component } from "react";
import "./StoreMainBannerCore.scss";

class StoreMainBannerCore extends Component {
  render() {
    let position = (this.props.index / this.props.dataLength) * 100;

    return (
      <div className="StoreMainBannerCore">
        <div className="ban_pic_wrapper">
          <a
            className="ban_pic_a"
            href={`https://www.styleshare.kr/catalogs/${this.props.webDestination}`}
          >
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
                  {this.props.text1}
                  <br></br>
                  {this.props.text2}
                </div>
              </div>
              <div className="subtext_box">
                <div
                  className="subtext"
                  style={{ color: this.props.colorCode }}
                >
                  {this.props.subText1}
                  <br></br>
                  {this.props.subText2}
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
