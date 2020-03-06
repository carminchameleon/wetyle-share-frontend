import React, { Component } from "react";
import PopularBrandCard from "./PopularBrandCard";

import Slider from "react-slick";

import "./PopularBrand.scss";

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

export class PopulrBrand extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    fetch("http://52.78.11.154:8000/product/brand/popular")
      .then(res => res.json())
      .then(res => {
        console.log("product", res);
        this.setState({
          data: res.brand_list
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
      <div className="PopularBrand">
        <div className="mainContainer">
          <div className="title_container">
            <h2 className="title">인기 브랜드</h2>
          </div>
          <div className="brand_container">
            <Slider {...settings}>
              {this.state.data.map(el => {
                return (
                  <PopularBrandCard
                    thedata={el}
                    link={el.brand_id}
                    brandName={el.name}
                    goodsCount={el.product_count}
                    picture={el.large_image_url}
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

export default PopulrBrand;
