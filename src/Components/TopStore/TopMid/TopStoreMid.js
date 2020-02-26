import React, { Component } from "react";
import "./TopStoreMid.scss";

class TopStoreMid extends Component {
  render() {
    return (
      <div className="top_store_mid">
        <div
          className={
            this.props.searchMode
              ? "top_mid_wrapper search_on"
              : "top_mid_wrapper search_off"
          }
        >
          <div className="mid">홈</div>
          <div className="mid">브랜드</div>
          <div className="mid">랭킹</div>
          <div className="mid">유니섹스</div>
          <div className="mid">여성</div>
          <div className="mid">뷰티</div>
          <div className="mid">가방잡화</div>
          <div className="mid">슈즈</div>
          <div className="mid">라이프</div>
          <div className="mid">테크</div>
          <div className="mid">헬스앤푸드</div>
        </div>
      </div>
    );
  }
}

export default TopStoreMid;
