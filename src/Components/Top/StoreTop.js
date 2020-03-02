import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopMid from "./TopMid/TopMid";
import TopRight from "./TopRight/TopRight";
import "./StoreTop.scss";

document.title = "최상단 OOTD | 스타일쉐어";
class StoreTop extends Component {
  state = {
    search_mode: false
  };

  handle_search = () => {
    this.setState({
      search_mode: !this.state.search_mode
    });
  };

  render() {
    return (
      <div className="top">
        <div className="top_wrapper">
          <div className="top_left">
            <div className="top_logo_img">
              <img src="https://usercontents-c.styleshare.io/images/16130846/40x40" />
            </div>
            <div className="top_left_main">
              <Link to="/">
                <div className="top_main">#OOTD</div>
              </Link>
              <Link to="/storemain">
                <div className="top_main">STORE</div>
              </Link>
            </div>
          </div>
          <TopMid searchMode={this.state.search_mode}>
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
          </TopMid>
          <TopRight
            searchMode={this.state.search_mode}
            handleSearch={this.handle_search}
          />
        </div>
      </div>
    );
  }
}

export default StoreTop;
