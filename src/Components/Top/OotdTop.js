import React, { Component } from "react";
import { Link } from "react-router-dom";

import TopMid from "./TopMid/TopMid";
import TopRight from "./TopRight/TopRight";
import "./OotdTop.scss";

class OotdTop extends Component {
  state = {
    search_mode: false,
    linePosition: -40
  };

  handle_search = () => {
    this.setState({
      search_mode: !this.state.search_mode
    });
  };

  handleUnderline = () => {
    this.setState({
      linePosition: 40
    });
  };

  render() {
    return (
      <div className="top">
        <div className="top_wrapper">
          <div className="top_left">
            <div className="top_logo_img">
              <img
                src="https://usercontents-c.styleshare.io/images/16130846/40x40"
                alt=""
              />
            </div>
            <div className="top_left_main">
              <div className="menu_box">
                <Link to="/">
                  <div className="top_main">#OOTD</div>
                </Link>
                <Link to="/storemain">
                  <div className="top_main" onClick={this.handleUnderline}>
                    STORE
                  </div>
                </Link>
              </div>
              <div
                className="underline"
                style={{
                  transform: `translate(${this.state.linePosition}px, 0px)`
                }}
              ></div>
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
