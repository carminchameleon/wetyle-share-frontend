import React, { Component } from "react";
import "./TopMid.scss";

class TopMid extends Component {
  render() {
    return (
      <div className="top_mid">
        <div
          className={
            this.props.searchMode
              ? "top_mid_wrapper search_on"
              : "top_mid_wrapper search_off"
          }
        >
          <div className="mid">인기</div>
          <div className="mid">데일리룩</div>
          <div className="mid">뷰티</div>
          <div className="mid">최신</div>
          <div className="mid">QnA</div>
          <div className="mid">팔로잉</div>
        </div>
      </div>
    );
  }
}

export default TopMid;
