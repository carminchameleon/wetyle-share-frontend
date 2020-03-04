import React, { Component } from "react";

import "./DaliyLookHeader.scss";

class DaliyLookHeader extends Component {
  state = {
    follower: false,
    follower1: false,
    followUp: 0
  };
  mapOfOtherItem = other => {
    return other.map((ele, idx) => (
      <div className="other_item" key={idx}>
        <img className="other_icon" src={ele.collection_image_url} alt="img" />
        <div className="other_desc">
          <p className="other_title">{ele.description}</p>
          <p className="other_sub">by&nbsp;{ele.nickname}</p>
        </div>
      </div>
    ));
  };
  handleFollowerAdd = () => {
    fetch(
      `http://10.58.2.111:8000/card/collection/follow/${this.state.followUp}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Impvbmd0a2ZrZCJ9.TburqDu3-81bWqGKbRutBcqHADIB955vipm-oJbRbu4"
        }
      }
    ).then(this.props.getTopItem);
  };
  render() {
    const { topItem, otherCard } = this.props;
    // if (topItem[0]) return null;
    return (
      <div className="header_wrapper">
        <div className="header_inner">
          <div className="left_best">
            <div className="left_top">
              <div className="gradient"></div>
              <div className="left_info">
                <div className="left_info_title">
                  <p>{topItem[0] ? topItem[0].collection_name : ""}</p>
                </div>
                <div className="left_info_sub">
                  <p>{topItem[0] ? topItem[0].description : ""}</p>
                </div>
              </div>
            </div>
            <div className="left_bottom_box">
              <div className="profile_icon"></div>
              <div className="profile_nick">
                <p className="desc1">by</p>
                <p className="desc2">{topItem[0] ? topItem[0].nickname : ""}</p>
              </div>
              <div className="count_box">
                <div className="style_count">
                  <p className="count_name">스타일</p>
                  <p>
                    <a className="count">
                      {topItem[0] ? topItem[0].style_count : ""}
                    </a>
                  </p>
                </div>
                <div className="follower_count">
                  <p className="count_name">팔로워</p>
                  <p>
                    <a className="count">
                      {topItem[0] ? topItem[0].follower_count : ""}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="second_item">
            <div className="top_img">
              <div className="gradient"></div>
              <p>{topItem[1] ? topItem[1].collection_name : ""}</p>
            </div>
            <div className="item_desc">
              <p>
                {topItem[1] ? topItem[1].description : ""}
                <a className="desc_more">
                  {topItem[1]
                    ? topItem[1].description.length > 20
                      ? "더 보기"
                      : ""
                    : ""}
                </a>
              </p>
            </div>
            <div className="bottom_profile">
              <div className="sub_count_box">
                <div className="sub_style_count">
                  <p className="sub_count_name">스타일</p>
                  <p>
                    <a className="sub_count">
                      {topItem[1] ? topItem[1].style_count : ""}
                    </a>
                  </p>
                </div>
                <div className="follower_count">
                  <p className="sub_count_name">팔로워</p>
                  <p>
                    <a className="sub_count">
                      {topItem[1] ? topItem[1].follower_count : ""}
                    </a>
                  </p>
                </div>
                <div
                  onClick={() => {
                    this.setState(
                      {
                        follower: !this.state.follower,
                        // followUp: topItem[1] ? topItem[1].collection_id : ""
                        followUp: topItem[1].collection_id
                      },
                      () => {
                        this.handleFollowerAdd();
                      }
                    );
                  }}
                  className={
                    this.state.follower ? "follower_btn_check" : "follower_btn"
                  }
                ></div>
              </div>
              <div className="bottom_bottom">
                <div className="bottom_profile_img"></div>
                <div className="sub_desc">
                  <p className="sub_desc1">by</p>
                  <p className="sub_desc2">
                    {topItem[1] ? topItem[1].nickname : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="second_item">
            <div className="top_img">
              <div className="gradient"></div>
              <p>{topItem[2] ? topItem[2].collection_name : ""}</p>
            </div>
            <div className="item_desc">
              <p>
                {topItem[2] ? topItem[2].description : ""}
                <a className="desc_more">
                  {topItem[1]
                    ? topItem[1].description.length > 20
                      ? "더 보기"
                      : ""
                    : ""}
                </a>
              </p>
            </div>
            <div className="bottom_profile">
              <div className="sub_count_box">
                <div className="sub_style_count">
                  <p className="sub_count_name">스타일</p>
                  <p>
                    <a className="sub_count">
                      {topItem[2] ? topItem[2].style_count : ""}
                    </a>
                  </p>
                </div>
                <div className="follower_count">
                  <p className="sub_count_name">팔로워</p>
                  <p>
                    <a className="sub_count">
                      {topItem[2] ? topItem[2].follower_count : ""}
                    </a>
                  </p>
                </div>
                <div
                  onClick={() => {
                    this.setState(
                      {
                        follower1: !this.state.follower1,
                        // followUp: topItem[2] ? topItem[2].collection_id : ""
                        followUp: topItem[2].collection_id
                      },
                      () => {
                        this.handleFollowerAdd();
                      }
                    );
                  }}
                  className={
                    this.state.follower1 ? "follower_btn_check" : "follower_btn"
                  }
                ></div>
              </div>
              <div className="bottom_bottom">
                <div className="bottom_profile_img"></div>
                <div className="sub_desc">
                  <p className="sub_desc1">by</p>
                  <p className="sub_desc2">
                    {topItem[2] ? topItem[2].nickname : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="other_list">{this.mapOfOtherItem(otherCard)}</div>
        </div>
      </div>
    );
  }
}

export default DaliyLookHeader;
