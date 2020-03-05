import React, { Component } from "react";
import BannerCore from "./BannerCore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss";

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

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentIndex: 0
    };
  }

  movescroll = () => {
    const location = document.querySelector(".PopularProduct").offsetTop - 100;
    window.scrollTo({ top: location, behavior: "smooth" });
  };
  componentDidMount = () => {
    fetch("http://localhost:3000/data/storemainbanner.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  };

  render() {
    const { data } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      // lazyLoad: true,
      slideToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      speed: 1200,
      autoPlaySpeed: 1200,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="Banner">
        <Slider {...settings}>
          {data.map((el, i) => {
            return (
              <BannerCore
                index={i}
                key={el.id}
                data={el}
                webDestination={el.webDestination}
                text={el.text}
                subText={el.subText}
                imageId={el.imageId}
                dataLength={data.length}
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

export default Banner;
