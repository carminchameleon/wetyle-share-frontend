import React, { Component } from "react";
import { Link } from "react-router-dom";

import TopMid from "./TopMid/TopMid";
import TopRight from "./TopRight/TopRight";
import "./OotdTop.scss";

class OotdTop extends Component {
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
            <Link to="/feed/hot">
              <div className="mid">인기</div>
            </Link>
            <Link to="/feed/dailyLook">
              <div className="mid">데일리룩</div>
            </Link>
            <Link to="/feed/beauty">
              <div className="mid">뷰티</div>
            </Link>
            <Link to="/feed/new">
              <div className="mid">최신</div>
            </Link>
            <Link to="/feed/qna">
              <div className="mid">QnA</div>
            </Link>
            <Link to="/feed/my-home">
              <div className="mid">팔로잉</div>
            </Link>
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

export default OotdTop;
