import React, { Component } from "react";
import Slider from "react-slick";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <di
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class Banner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slideToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      speed: 3000,
      lazyLoad: true,
      autoPlaySpeed: 3000, // 자동재생
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      // cssEase: "linear"
      swipeToSlide: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="banner_wrapper">
              <div className="ban_pic_wrapper">
                {/* <a className="ban_pic_a" href=""> */}
                <picture className="ban_pic">
                  <img
                    className="ban_img"
                    src="https://usercontents-c.styleshare.io/images/43725975/1920x1080"
                    alt="bannerImage"
                  ></img>
                </picture>
                {/* </a> */}
              </div>
              {/* 글자 들어가는 가운데 부분 */}
              <div className="ban_content_container">
                {/* 글자  */}
                <div className="ban_content_text">
                  {/* 왼쪽 라인 맞추는 빈공간 */}
                  <div className="ban_left_empty"></div>
                  {/* //subtext, text 들어가는 공간 */}
                  <div className="ban_right_box">
                    <div className="ban_subtext_box">
                      <p className="ban_subtext">
                        윈더비지터<br></br>단독 40% 할인
                      </p>
                    </div>
                    <div className="ban_text_box">
                      <p className="ban_text">
                        빈티지 후드 • 맨투맨 • 반팔 티셔츠 <br></br> 무료
                        배송으로 만나볼까요?
                      </p>
                    </div>
                  </div>
                </div>
                {/* 얇은 바 */}
                <div className="ban_content_line">
                  {/* 빈칸 */}
                  <div className="ban_line_front"></div>
                  {/* 가운데 들어가는 부분 */}
                  <div className="ban_line_middle">
                    <div className="ban_line_middle_inner">
                      <div className="ban_line_middle_indicator">
                        <div className="ban_line_middle_bold"></div>
                      </div>
                    </div>
                  </div>
                  {/* 뒷부분 */}
                  <div className="ban_line_back"></div>
                </div>
              </div>
              <div className="ban_icon_container">
                <div className="ban_left_box">
                  <img
                    className="ban_arrow_button"
                    src="https://image.flaticon.com/icons/svg/126/126492.svg"
                    alt="left_button"
                  ></img>
                </div>
                <div className="ban_center_empty"></div>
                <div className="ban_right_box">
                  <img
                    className="ban_arrow_button"
                    src="https://image.flaticon.com/icons/svg/126/126490.svg"
                    alt="right_button"
                  ></img>
                </div>
              </div>
              <button className="ban_scroll_container">
                <span className="ban_scroll_text">Scroll</span>
                <div className="ban_scroll_circle">
                  <img
                    className="ban_scroll_button"
                    src="https://image.flaticon.com/icons/svg/2223/2223613.svg"
                    alt="scroll_button"
                  ></img>
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="banner_wrapper">
              <div className="ban_pic_wrapper">
                {/* <a className="ban_pic_a" href=""> */}
                <picture className="ban_pic">
                  <img
                    className="ban_img"
                    src="https://usercontents-c.styleshare.io/images/43733520/1920x1080"
                    alt="bannerImage"
                  ></img>
                </picture>
                {/* </a> */}
              </div>
              {/* 글자 들어가는 가운데 부분 */}
              <div className="ban_content_container">
                {/* 글자  */}
                <div className="ban_content_text">
                  {/* 왼쪽 라인 맞추는 빈공간 */}
                  <div className="ban_left_empty"></div>
                  {/* //subtext, text 들어가는 공간 */}
                  <div className="ban_right_box">
                    <div className="ban_subtext_box">
                      <p className="ban_subtext">
                        새내기룩 고민?<br></br> 원피스&스커트 추천
                      </p>
                    </div>
                    <div className="ban_text_box">
                      <p className="ban_text">
                        지금부터 봄까지!<br></br>완벽한 스타일링을 책임질 베스트
                        추천템
                      </p>
                    </div>
                  </div>
                </div>
                {/* 얇은 바 */}
                <div className="ban_content_line">
                  {/* 빈칸 */}
                  <div className="ban_line_front"></div>
                  {/* 가운데 들어가는 부분 */}
                  <div className="ban_line_middle">
                    <div className="ban_line_middle_inner">
                      <div className="ban_line_middle_indicator">
                        <div className="ban_line_middle_bold"></div>
                      </div>
                    </div>
                  </div>
                  {/* 뒷부분 */}
                  <div className="ban_line_back"></div>
                </div>
              </div>
              <div className="ban_icon_container">
                <div className="ban_left_box">
                  <img
                    className="ban_arrow_button"
                    src="https://image.flaticon.com/icons/svg/126/126492.svg"
                    alt="left_button"
                  ></img>
                </div>
                <div className="ban_center_empty"></div>
                <div className="ban_right_box">
                  <img
                    className="ban_arrow_button"
                    src="https://image.flaticon.com/icons/svg/126/126490.svg"
                    alt="right_button"
                  ></img>
                </div>
              </div>
              <button className="ban_scroll_container">
                <span className="ban_scroll_text">Scroll</span>
                <div className="ban_scroll_circle">
                  <img
                    className="ban_scroll_button"
                    src="https://image.flaticon.com/icons/svg/2223/2223613.svg"
                    alt="scroll_button"
                  ></img>
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="banner_wrapper">
              <div className="ban_pic_wrapper">
                {/* <a className="ban_pic_a" href=""> */}
                <picture className="ban_pic">
                  <img
                    className="ban_img"
                    src="https://usercontents-c.styleshare.io/images/43733520/1920x1080"
                    alt="bannerImage"
                  ></img>
                </picture>
                {/* </a> */}
              </div>
              {/* 글자 들어가는 가운데 부분 */}
              <div className="ban_content_container">
                {/* 글자  */}
                <div className="ban_content_text">
                  {/* 왼쪽 라인 맞추는 빈공간 */}
                  <div className="ban_left_empty"></div>
                  {/* //subtext, text 들어가는 공간 */}
                  <div className="ban_right_box">
                    <div className="ban_subtext_box">
                      <p className="ban_subtext">
                        새내기룩 고민?<br></br> 원피스&스커트 추천
                      </p>
                    </div>
                    <div className="ban_text_box">
                      <p className="ban_text">
                        지금부터 봄까지!<br></br>완벽한 스타일링을 책임질 베스트
                        추천템
                      </p>
                    </div>
                  </div>
                </div>
                {/* 얇은 바 */}
                <div className="ban_content_line">
                  {/* 빈칸 */}
                  <div className="ban_line_front"></div>
                  {/* 가운데 들어가는 부분 */}
                  <div className="ban_line_middle">
                    <div className="ban_line_middle_inner">
                      <div className="ban_line_middle_indicator">
                        <div className="ban_line_middle_bold"></div>
                      </div>
                    </div>
                  </div>
                  {/* 뒷부분 */}
                  <div className="ban_line_back"></div>
                </div>
              </div>
              <div className="ban_icon_container">
                <div className="ban_left_box">
                  <img
                    className="ban_arrow_button"
                    src="https://image.flaticon.com/icons/svg/126/126492.svg"
                    alt="left_button"
                  ></img>
                </div>
                <div className="ban_center_empty"></div>
                <div className="ban_right_box">
                  <img
                    className="ban_arrow_button"
                    src="https://image.flaticon.com/icons/svg/126/126490.svg"
                    alt="right_button"
                  ></img>
                </div>
              </div>
              <button className="ban_scroll_container">
                <span className="ban_scroll_text">Scroll</span>
                <div className="ban_scroll_circle">
                  <img
                    className="ban_scroll_button"
                    src="https://image.flaticon.com/icons/svg/2223/2223613.svg"
                    alt="scroll_button"
                  ></img>
                </div>
              </button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Banner;
