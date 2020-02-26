import React, { Component } from "react";
import "./StoreMainBannerCore.scss";

class StoreMainBannerCore extends Component {
  render() {
    console.log(this.props.data);
    console.log(this.props.webDestination);
    console.log(this.props.subText);
    console.log(this.props.text);
    console.log(this.props.imageId);

    return (
      <div className="StoreMainBannerCore">
        <div className="ban_pic_wrapper">
          <a className="ban_pic_a" href="{this.props.web}">
            <img
              src={`https://usercontents-c.styleshare.io/images/${this.props.imageId}/1920x1080`}
            ></img>
          </a>
        </div>
        <div className="ban_content_container">
          <div className="ban_content_text">
            <div className="ban_left_empty">hello</div>
            <div className="ban_right_box">
              <div className="ban_text_box">
                <div className="ban_text">{this.props.text}</div>
              </div>
              <div className="ban_subtext_box">
                <div className="ban_subtext">{this.props.subText}</div>
              </div>
            </div>
          </div>
          <div className="ban_content_line">
            <div className="ban_line_front"></div>
            <div className="ban_line_middle">
              <div className="ban_line_middle_inner">
                <div className="ban_line_middle_indicator">
                  <div className="ban_line_middle_bold"></div>
                </div>
              </div>
            </div>
            <div className="ban_line_back"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreMainBannerCore;
