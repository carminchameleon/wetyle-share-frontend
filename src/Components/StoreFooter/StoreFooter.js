import React, { Component } from "react";
import FooterFacebook from "../../Img/FooterFacebook.png";
import FooterInsta from "../../Img/FooterInsta.png";
import FooterTwitter from "../../Img/FooterTwitter.png";
import FooterYoutube from "../../Img/FooterYoutube.png";
import AskKakao from "../../Img/AskKakao.png";
import ArrowRight from "../../Img/ArrowRight.png";
import "./StoreFooter.scss";

class StoreFooter extends Component {
  render() {
    return (
      <div className="footer_background">
        <div className="inner_footer">
          <div className="one_two_three_div">
            {/* 1,2 싸고 있을 div */}
            <div className="one_and_two_div">
              {/* ***************1번 div*************** */}
              <div className="contact_company">
                <div className="service_center_text">고객센터</div>
                <div className="company_num">1833-8879</div>
                <p className="service_time">
                  평일 10:00 ~ 19:00 (점심시간: 12:00 ~ 14:00)
                  <br />
                  토/일, 공휴일 휴무
                </p>
              </div>
              {/* ***********1번 끝******************* */}

              {/* ----2번div */}
              <div className="about_company">
                <div className="about_us_text">ABOUT US</div>
                <div className="intro_and_ask_parent">
                  <div className="intro_company">
                    <a
                      className="adress_intro_company"
                      target="_blank"
                      href="https://about.styleshare.kr/?_gl=1*t8svjv*_gcl_aw*R0NMLjE1ODI3NzE4MzUuQ2p3S0NBaUF5OWp5QlJBNkVpd0FlY2xRaExDWlE1SldybkxfWEhsOVd5TEhrWmp0TXRQc251aG5XVzQ0S0g2cVdIY3VTNUdLaVJ3N2hob0NYUXNRQXZEX0J3RQ.."
                    >
                      회사 소개{" "}
                      <img src={ArrowRight} alt="" width="5px" heigth="5px" />
                    </a>
                  </div>
                  <div className="ask_business">
                    <a
                      className="address_business"
                      target="_blank"
                      href="https://about.styleshare.kr/contact?_gl=1*os9stj*_gcl_aw*R0NMLjE1ODI3NzE4MzUuQ2p3S0NBaUF5OWp5QlJBNkVpd0FlY2xRaExDWlE1SldybkxfWEhsOVd5TEhrWmp0TXRQc251aG5XVzQ0S0g2cVdIY3VTNUdLaVJ3N2hob0NYUXNRQXZEX0J3RQ.."
                    >
                      입점/제휴 문의{" "}
                      <img src={ArrowRight} alt="" width="5px" heigth="5px" />
                    </a>
                  </div>
                </div>
              </div>
              {/* 2번 끝--------------- */}
            </div>
            {/* ------------3번 div */}
            <div className="put_sns_btn">
              <span className="facebook_btn sns_btn">
                <a
                  href="https://www.facebook.com/StyleShareApp"
                  target="_blank"
                >
                  <img src={FooterFacebook} alt="" className="facebook_btn" />
                </a>
              </span>
              <span className="insta_btn sns_btn">
                <a
                  href="https://www.instagram.com/styleshare_kr/"
                  target="_blank"
                >
                  <img src={FooterInsta} alt="" className="insta_btn" />
                </a>
              </span>
              <span className="twitter_btn sns_btn">
                <a href="https://twitter.com/StyleShare_twt" target="_blank">
                  <img src={FooterTwitter} alt="" className="twitter_btn" />
                </a>
              </span>
              <span className="youtube_btn sns_btn">
                <a
                  href="https://www.youtube.com/c/StyleShareTV"
                  target="_blank"
                >
                  <img src={FooterYoutube} alt="" className="youtube_btn" />
                </a>
              </span>
            </div>
            {/* 3번 끝*********** */}
          </div>
          {/* **********개인정보 처리방침 & 이용 약관********* */}
          <div className="indi_and_access_terms">
            <span className="handling_indi_info">
              <a
                href="https://www.styleshare.kr/privacy/"
                className="indi_info_link"
              >
                개인정보 처리방침
              </a>
            </span>
            <span className="access_terms">
              <a
                href="https://www.styleshare.kr/terms-of-use/"
                className="access_terms_link"
              >
                이용 약관
              </a>
            </span>
          </div>
          {/* ********** 개인정보 처리방침 & 이용 약관 끝************* */}
          {/* 자주 묻는 질문, 카톡 문의, 회사 위치 시작---------          */}
          <div className="fre_kakao_location_parent">
            <div className="fre_kakao_parent">
              <div>
                <a
                  href="https://m.blog.naver.com/PostView.nhn?blogId=styleshare&logNo=220687878509&proxyReferer=https://www.styleshare.kr&utm_source=ios_urlcopy"
                  target="_blank"
                  className="fre_question"
                >
                  자주 묻는 질문
                </a>
              </div>
              <div>
                <a
                  href="https://open.kakao.com/o/sS0JQDZb"
                  target="_blank"
                  className="kakao_talk_ask"
                >
                  <img src={AskKakao} alt="" className="ask_kakao" />
                  &nbsp;카톡문의
                </a>
              </div>
            </div>
            <p className="address_of_company">
              상호명: 주식회사 위타일쉐어 | 사업자 등록번호: 110-89-95574 |
              <a
                href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1108195574&apv_perm_no="
                target="_blank"
                className="fair_trade"
              >
                사업자등록정보 확인
              </a>
              <br />
              통신판매업신고: 제 2015-서울강남-02962호 | 주소: 서울특별시 강남구
              삼성동 테헤란로 427 | 대표자: 송은우 | 개인정보책임자: 김예리
            </p>
          </div>
          {/* ***************************** */}
          <div className="kb_link_style">
            <a
              href="https://okbfex.kbstar.com/quics?page=C021590&cc=b034066%3Ab035526&mHValue=c2f9e422330c79617b06731f6993594a201509091632335#loading"
              target="_blank"
            >
              <img
                alt="kb escrow mark"
                class="escrow"
                height="48"
                width="48"
                src="https://web-frontend.styleshare.io/prod/assets/escrowmark.96a54d49.png"
              />
            </a>
          </div>
        </div>
        {/* ---------------------자주 묻는 질문, 카톡 문의, 회사 위치끝 */}
      </div>
    );
  }
}
export default StoreFooter;
