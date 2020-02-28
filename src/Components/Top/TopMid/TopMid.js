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
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TopMid;
