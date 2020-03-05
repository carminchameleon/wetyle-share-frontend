import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StoreMainBannerCore from "./StoreMainBannerCore";
import "./StoreMainBanner.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="left_arrow_container">
      <div className="left_box">
        <img
          onClick={onClick}
          className="left_button"
          src="https://image.flaticon.com/icons/svg/126/126492.svg"
          alt=""
        ></img>
      </div>
      <div className="left_empty"></div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="right_arrow_container">
      <div className="right_empty"></div>
      <div className="right_box">
        <img
          onClick={onClick}
          className="right_button"
          src="https://image.flaticon.com/icons/svg/126/126490.svg"
          alt=""
        ></img>
      </div>
    </div>
  );
}

class StoreMainBanner extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataLength: 0,
      currentIndex: 0
    };
  }

  movescroll = () => {
    const location =
      document.querySelector(".StoreMainPopularProduct").offsetTop - 100;
    window.scrollTo({ top: location, behavior: "smooth" });
  };
  componentDidMount = () => {
    fetch("http://localhost:3000/data/storemainbanner.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data,
          dataLength: res.data.length
        });
      });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slideToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      speed: 500,
      // lazyLoad: true,
      autoPlaySpeed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="StoreMainBanner">
        <Slider {...settings}>
          {this.state.data.map((el, i) => {
            return (
              <StoreMainBannerCore
                index={i}
                key={el.id}
                data={el}
                webDestination={el.webDestination}
                // subText1={el.subText1}
                // subText2={el.subText2}
                // text1={el.text1}
                // text2={el.text2}
                text={el.text}
                subText={el.subText}
                imageId={el.imageId}
                dataLength={this.state.dataLength}
                colorCode={el.colorCode}
              />
            );
          })}
        </Slider>

        <button className="scroll_container" onClick={this.movescroll}>
          <span className="scroll_text">Scroll</span>
          <div className="scroll_circle">
            <img
              className="scroll_button"
              src="https://image.flaticon.com/icons/svg/2223/2223613.svg"
              alt="scroll_button"
            ></img>
          </div>
        </button>
      </div>
    );
  }
}

export default StoreMainBanner;
