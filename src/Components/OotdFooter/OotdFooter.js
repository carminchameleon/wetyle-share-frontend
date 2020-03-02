import React, { Component } from "react";

import "./OotdFooter.scss";
class OotdFooter extends Component {
  render() {
    return (
      <div className="OOTD_footer_wrapper">
        <div className="OOTD_footer">
          <div className="OOTD_main">
            <div className="left_content">
              <p className="callcenter_info">고객센터 안내</p>
              <div>
                <p className="callcenter_number">1833-8879</p>
                <div className="eat_time">
                  <span className="eat_name">평일&nbsp;</span>
                  <span>10:00 ~ 19:00(점심시간:12:00 ~ 14:00)</span>
                </div>
              </div>
            </div>
            <div className="center_content">
              <p className="center_title">회사 소개 및 약관 내용</p>
              <div className="center_body">
                <a href="https://about.styleshare.kr/">회사소개</a>
                <a href="https://www.styleshare.kr/terms-of-use/">이용 약관</a>
                <a href="https://www.styleshare.kr/privacy/">
                  개인정보 취급방침
                </a>
              </div>
            </div>
            <div className="right_content">
              <p className="right_title">Follow us</p>
              <div className="right_body">
                <a href="https://www.facebook.com/StyleShareApp">
                  <span className="facebook_icon" />
                </a>
                <a href="https://www.facebook.com/StyleShareApp">
                  <span className="instagram_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="company_info_box">
            <div>
              <span>
                상호명: 주식회사 스타일쉐어{" "}
                <span className="seperate_bar"></span>
                사업자 등록번호:110-81-95574
                <span className="seperate_bar"></span>
                <a
                  href="https://www.facebook.com/StyleShareApp"
                  style={{
                    textDecoration: "underline",
                    color: "#454C53"
                  }}
                >
                  사업등록정보 확인
                </a>
              </span>
            </div>
            <span>
              통신판매업신고: 제 2015-서울강남-02962호
              <span className="seperate_bar"></span>주소: 서울특별시 강남구
              선릉로93길 35 나라키움 역삼B빌딩 3층
              <span className="seperate_bar"></span>대표자: 윤자영
              <span className="seperate_bar"></span>개인정보책임자: 오형내
            </span>
          </div>
          <div>
            <div className="info_protect"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default OotdFooter;
