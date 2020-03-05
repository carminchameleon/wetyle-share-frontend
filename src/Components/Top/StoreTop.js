import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopMid from "./TopMid/TopMid";
import TopRight from "./TopRight/TopRight";
import Submenu from "./Submenu/Submenu";
import "./StoreTop.scss";

document.title = "최상단 OOTD | 스타일쉐어";
class StoreTop extends Component {
  state = {
    search_mode: false,
    nav: "close",
    mode: ""
  };

  handle_search = () => {
    this.setState({
      search_mode: !this.state.search_mode
    });
  };

  handleOver = name => {
    // console.log(this.state.nav);
    this.setState({
      nav: "open",
      mode: name
    });
  };

  handleLeave = () => {
    // console.log(this.state.nav);
    this.setState({
      nav: "close"
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
              <Link to="/">
                <div className="top_main">#OOTD</div>
              </Link>
              <Link to="/storemain">
                <div className="top_main">STORE</div>
              </Link>
            </div>
          </div>
          <TopMid searchMode={this.state.search_mode}>
            <ul className="mid_wrapper">
              <div className="mid">홈</div>
              <div className="mid">브랜드</div>
              <div className="mid">랭킹</div>
              <div
                className="mid"
                onMouseEnter={() => this.handleOver("unisex")}
              >
                유니섹스
              </div>
              <div
                className="mid"
                onMouseEnter={() => this.handleOver("woman")}
              >
                여성
              </div>
              <div
                className="mid"
                onMouseEnter={() => this.handleOver("beauty")}
              >
                뷰티
              </div>
              <div className="mid" onMouseEnter={() => this.handleOver("bag")}>
                가방잡화
              </div>
              <div
                className="mid"
                onMouseEnter={() => this.handleOver("shoes")}
              >
                슈즈
              </div>
              <div className="mid" onMouseEnter={() => this.handleOver("life")}>
                라이프
              </div>
              <div className="mid" onMouseEnter={() => this.handleOver("tech")}>
                테크
              </div>
              <div
                className="mid"
                onMouseEnter={() => this.handleOver("health")}
              >
                헬스앤푸드
              </div>
              {this.state.nav === "open" && (
                <Submenu
                  mode={this.state.mode}
                  handleLeave={this.handleLeave}
                />
              )}
            </ul>
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
