import React, { Component } from "react";
import StoreMainPopularBrandCard from "./StoreMainPopularBrandCard";

import Slider from "react-slick";

import "./StoreMainPopularBrand.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="brand_left_arrow_box">
      <img
        onClick={onClick}
        className="brand_left_arrow"
        src="https://image.flaticon.com/icons/svg/126/126492.svg"
        alt=""
      ></img>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="brand_right_arrow_box">
      <img
        onClick={onClick}
        className="brand_right_arrow"
        src="https://image.flaticon.com/icons/svg/126/126490.svg"
        alt=""
      ></img>
    </div>
  );
}

export class StoreMainPopulrBrand extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  //   https://usercontents-c.styleshare.io/images/28456313/540x305
  componentDidMount = () => {
    fetch("http://localhost:3000/data/storemainpopularbrand.json")
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      });
  };

  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "-325px",
      slidesToShow: 2,
      speed: 500,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="StoreMainPopularBrand">
        <div className="mainContainer">
          <div className="title_container">
            <h2 className="title">인기 브랜드</h2>
          </div>
          <div className="brand_container">
            <Slider {...settings}>
              {this.state.data.map(el => {
                return (
                  <StoreMainPopularBrandCard
                    link={el.id}
                    brandName={el.name}
                    goodsCount={el.goodsCount}
                    picture={el.coverImage.id}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="show_more_container">
            <div className="show_more_box">
              <div className="show_more_set">
                <a
                  className="show_more"
                  href="https://www.styleshare.kr/brands"
                >
                  브랜드 더보기
                  <img
                    className="show_more_icon"
                    src="https://image.flaticon.com/icons/svg/126/126490.svg"
                    alt=""
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreMainPopulrBrand;
