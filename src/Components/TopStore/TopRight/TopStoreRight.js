import React, { Component } from "react";
import "./TopStoreRight.scss";
import bell from "../../../Img/bell.png";
import bag from "../../../Img/bag.png";
import profile from "../../../Img/profile.png";
import search from "../../../Img/search.png";

class TopStoreRight extends Component {
  // state = {
  //   search_focus: false
  // };
  render() {
    return (
      <div className="top_store_right">
        <div className="top_right_wrapper">
          <div className="right_search">
            <img className="right_search_img" src={search} />
            {this.props.searchMode ? (
              <input
                className="right_search_text_focus"
                // onMouseOut={() => {
                //   this.setState({
                //     search_focus: !this.state.search_focus
                //   });
                // }}
                onMouseOut={this.props.handle_search}
                // onClick={this.props.handle_search}
                placeholder="검색"
                type="search"
                name="search"
              ></input>
            ) : (
              <input
                className="right_search_text"
                // onClick={() => {
                //   this.setState({
                //     search_focus: !this.state.search_focus
                //   });
                // }}
                onClick={this.props.handle_search}
                placeholder="검색"
                type="search"
                name="search"
              ></input>
            )}
          </div>
          <div className="right_main">
            {!window.localStorage.token ? (
              <div className="right_main">
                <div className="main_mid_img">
                  <img src={bag}></img>
                </div>
                <button className="login_signin">로그인/가입</button>
              </div>
            ) : (
              <div className="right_main">
                <div className="main_left_img">
                  <img src={bell}></img>
                </div>
                <div className="main_mid_img">
                  <img src={bag}></img>
                </div>
                <div className="main_right_img">
                  <img src={profile}></img>
                </div>
              </div>
            )}
            {/* <div className="main_left_img">
              <img src={bell}></img>
            </div>
            <div className="main_mid_img">
              <img src={bag}></img>
            </div>
            <div className="main_right_img">
              <img src={profile}></img>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TopStoreRight;
