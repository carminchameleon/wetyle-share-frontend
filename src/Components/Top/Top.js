import React, { Component } from "react";
import TopMid from "./TopMid/TopMid";
import TopRight from "./TopRight/TopRight";
import "./Top.scss";

document.title = "최상단 OOTD | 스타일쉐어";
class Top extends Component {
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
              <div className="top_main">#OOTD</div>
              <div className="top_main">STORE</div>
            </div>
          </div>
          <TopMid searchMode={this.state.search_mode} />
          <TopRight
            searchMode={this.state.search_mode}
            handle_search={this.handle_search}
          />
        </div>
      </div>
    );
  }
}

export default Top;
