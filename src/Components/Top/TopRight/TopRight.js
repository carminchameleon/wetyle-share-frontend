import React, { Component } from "react";
import { Link } from "react-router-dom";

import bell from "../../../Img/bell.png";
import bag from "../../../Img/bag.png";
import profile from "../../../Img/profile.png";
import search from "../../../Img/search.png";

import "./TopRight.scss";

class TopRight extends Component {
  state = {
    keyword: "",
    focus: false,
    arr: []
  };
  componentDidMount = () => {
    this.getModalData();
  };
  getModalData = () => {
    fetch("http://localhost:3000/data/mo.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          arr: res.search_data
        });
      });
  };
  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  // 검색 창 리스트 구현 완료
  handleCheck = () => {
    const { arr, keyword } = this.state;
    const result = arr.filter(data => data.includes(keyword));
    return (
      <div>
        {result.map((ele, idx) => (
          <li key={idx}>{ele}</li>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="top_right">
        <div className="top_right_wrapper">
          <div className="right_search">
            {/* {this.handleCheck(this.state.arr, this.state.keyword)} */}
            <img className="right_search_img" src={search} alt="img" />
            <input
              className="right_search_text"
              placeholder="검색"
              type="search"
              name="search"
              onChange={this.handleChange}
              value={this.state.keyword}
              onFocus={this.props.handleSearch}
              onBlur={this.props.handleSearch}
            ></input>
          </div>
          <div className="right_main">
            {!localStorage.getItem("kakao_token") ? (
              <div className="right_main">
                <div className="main_mid_img">
                  <img src={bag} alt="img"></img>
                </div>
                <Link to="/login">
                  <button className="login_signin">로그인/가입</button>
                </Link>
              </div>
            ) : (
              <div className="right_main">
                <div className="main_left_img">
                  <img src={bell} alt="img"></img>
                </div>
                <div className="main_mid_img">
                  <img src={bag} alt="img"></img>
                </div>
                <div className="main_right_img">
                  <img src={profile} alt="img"></img>
                </div>
              </div>
            )}
          </div>
        </div>
        {this.props.searchMode && this.state.keyword ? (
          <div className="search_correct">
            <ul>{this.handleCheck()}</ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TopRight;

// {!window.localStorage.token ? (
//   <div>
//     <div className="main_mid_img">
//       <img src={bag}></img>
//     </div>
//     <button className="login_signin">로그인/가입</button>
//   </div>
// ) : (
//   <div>
//     <div className="main_left_img">
//       <img src={bell}></img>
//     </div>
//     <div className="main_mid_img">
//       <img src={bag}></img>
//     </div>
//     <div className="main_right_img">
//       <img src={profile}></img>
//     </div>
//   </div>
// )}
