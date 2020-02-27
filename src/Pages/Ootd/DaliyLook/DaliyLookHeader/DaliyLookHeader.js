import React, { Component } from "react";

import "./DaliyLookHeader.scss";

class DaliyLookHeader extends Component {
  mapOfOtherItem = other => {
    return other.map((ele, idx) => (
      <div className="other_item" key={idx}>
        <img className="other_icon" src={ele.url} alt="img" />
        <div className="other_desc">
          <p className="other_title">{ele.title}</p>
          <p className="other_sub">{ele.sub_title}</p>
        </div>
      </div>
    ));
  };
  render() {
    const { other } = this.props;
    return (
      <div className="header_wrapper">
        <div className="header_inner">
          <div className="left_best">
            <div className="left_top">
              <div className="gradient"></div>
              <div className="left_info">
                <div className="left_info_title">
                  <p>
                    이번 봄엔 뭐가 유행일까?
                    <br />
                    💛2020 뷰티 트렌드💛
                  </p>
                </div>
                <div className="left_info_sub">
                  <p>
                    다가오는 봄, 어떤 뷰티 아이템이 유행할지 미리 보고 싶다면?
                    <br />
                    스타일쉐어뷰티 써클이 보여주는 메이크업 튜토리얼과 함께 ...
                  </p>
                </div>
              </div>
            </div>
            <div className="left_bottom_box">
              <div className="profile_icon"></div>
              <div className="profile_nick">
                <p className="desc1">by</p>
                <p className="desc2">스타일쉐어 써클</p>
              </div>
              <div className="count_box">
                <div className="style_count">
                  <p className="count_name">스타일</p>
                  <p>
                    <a className="count">7</a>
                  </p>
                </div>
                <div className="follower_count">
                  <p className="count_name">팔로워</p>
                  <p>
                    <a className="count">47</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="second_item">
            <div className="top_img">
              <div className="gradient"></div>
              <p>
                알고 보면 다 다른 컬러
                <br />
                신비한 음영 사전
              </p>
            </div>
            <div className="item_desc">
              <p>
                음영 컬러 섀도의 매력은 화려한 컬러가 아닌데도 있는 그대로의
                아름다움을 부각시켜주는 게 아닐까요? 신비한 음영 새도의...
                <a className="desc_more">더 보기</a>
              </p>
            </div>
            <div className="bottom_profile">
              <div className="sub_count_box">
                <div className="sub_style_count">
                  <p className="sub_count_name">스타일</p>
                  <p>
                    <a className="sub_count">7</a>
                  </p>
                </div>
                <div className="follower_count">
                  <p className="sub_count_name">팔로워</p>
                  <p>
                    <a className="sub_count">47</a>
                  </p>
                </div>
              </div>
              <div className="bottom_bottom">
                <div className="bottom_profile_img"></div>
                <div className="sub_desc">
                  <p className="sub_desc1">by</p>
                  <p className="sub_desc2">스타일쉐어 써클</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second_item">
            <div className="top_img">
              <div className="gradient"></div>
              <p>
                알고 보면 다 다른 컬러
                <br />
                신비한 음영 사전
              </p>
            </div>
            <div className="item_desc">
              <p>
                음영 컬러 섀도의 매력은 화려한 컬러가 아닌데도 있는 그대로의
                아름다움을 부각시켜주는 게 아닐까요? 신비한 음영 새도의...
                <a className="desc_more">더 보기</a>
              </p>
            </div>
            <div className="bottom_profile">
              <div className="sub_count_box">
                <div className="sub_style_count">
                  <p className="sub_count_name">스타일</p>
                  <p>
                    <a className="sub_count">7</a>
                  </p>
                </div>
                <div className="follower_count">
                  <p className="sub_count_name">팔로워</p>
                  <p>
                    <a className="sub_count">47</a>
                  </p>
                </div>
              </div>
              <div className="bottom_bottom">
                <div className="bottom_profile_img"></div>
                <div className="sub_desc">
                  <p className="sub_desc1">by</p>
                  <p className="sub_desc2">하이루 록sadsadsa리 써클</p>
                </div>
              </div>
            </div>
          </div>
          <div className="other_list">{this.mapOfOtherItem(other)}</div>
        </div>
      </div>
    );
  }
}

export default DaliyLookHeader;
