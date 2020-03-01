import React, { Component } from "react";
import Slider from "react-slick";

import MainImgSlider from "./MainImgSlider/MainImgSlider";
import CollectionImgSlide from "./CollectionImgSlider/CollectionImgSlide";

import "./Ootdcarousel.scss";

// 슬라이드 속성 설정
const mainSettingsVar = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const collectionSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class Ootdcarousel extends Component {
  state = {
    arrowVisibel: false
  };
  collectionLeft = () => {
    this.collection.slickPrev();
  };
  collectionRight = () => {
    this.collection.slickNext();
  };
  arrowVisibel = () => {
    this.setState({
      arrowVisibel: true
    });
  };

  arrowHidden = () => {
    this.setState({
      arrowVisibel: false
    });
  };

  mapOfMainImg = images => {
    return images.map((ele, idx) => (
      <MainImgSlider
        over={this.arrowVisibel}
        out={this.arrowHidden}
        arrow={this.state.arrowVisibel}
        data={ele}
        key={idx}
      />
    ));
  };

  mapOfCollection = images => {
    return images.map((ele, idx) => (
      <CollectionImgSlide data={ele} key={idx} />
    ));
  };

  render() {
    const { images } = this.props;
    const mainSettings = {
      ...mainSettingsVar,
      customPaging: function(i) {
        return (
          <div>
            <img alt="thumbnail" src={images[i].main_url} />
          </div>
        );
      }
    };

    return (
      <>
        <Slider ref={ref => (this.slider = ref)} {...mainSettings}>
          {window.innerHeight <= 800
            ? this.mapOfMainImg(images.slice(0, 8))
            : this.mapOfMainImg(images.slice(0, 10))}
        </Slider>
        <div
          className={
            this.state.arrowVisibel
              ? "slick-prev_arrow"
              : "slick-prev_arrow hidden"
          }
          onClick={() => {
            this.slider.slickPrev();
          }}
          style={{
            animation: this.state.arrowVisibel ? "none" : ""
          }}
          onMouseOver={this.arrowVisibel}
        ></div>
        <div
          className={
            this.state.arrowVisibel
              ? "slick-next_arrow"
              : "slick-next_arrow hidden"
          }
          onClick={() => {
            this.slider.slickNext();
          }}
          style={{
            animation: this.state.arrowVisibel ? "none" : ""
          }}
          onMouseOver={this.arrowVisibel}
        ></div>
        <>
          <div className="collection">
            <div>
              <div className="collection_title">
                <div className="collection_tilte_inner">
                  <p>
                    Collected in <span>3 collections</span>
                  </p>
                  <div className="collection_button">
                    <div
                      className="collection_left"
                      onClick={this.collectionLeft}
                    ></div>
                    <div
                      className="collection_right"
                      onClick={this.collectionRight}
                    ></div>
                  </div>
                </div>
              </div>
              <Slider
                {...collectionSettings}
                ref={ref => (this.collection = ref)}
              >
                {this.mapOfCollection(images.slice(10, 15))}
                <div className="collection_more">더 보기</div>
              </Slider>
            </div>
          </div>
        </>
      </>
    );
  }
}

export default Ootdcarousel;
