import React, { Component } from "react";
import Slider from "react-slick";

import "./Ootdcarousel.scss";

class Ootdcarousel extends Component {
  arrowVisibel = () => {
    this.left.classList.remove("hidden");
    this.right.classList.remove("hidden");
  };
  arrowHidden = () => {
    this.left.classList.add("hidden");
    this.right.classList.add("hidden");
  };
  collectionLeft = () => {
    this.collection.slickPrev();
  };
  collectionRight = () => {
    document.querySelector(".collection_more").style.width = "30%";
    this.collection.slickNext();
  };
  mapOfMainImg = images => {
    return images.map((ele, idx) => (
      <div
        key={idx}
        className="img_wrapper"
        onMouseOver={this.arrowVisibel}
        onMouseOut={this.arrowHidden}
      >
        <img src={ele.main_url} alt="img" />
      </div>
    ));
  };

  mapOfCollection = images => {
    return images.map((ele, idx) => (
      <div
        key={idx}
        className="collection_wrapper"
        onMouseOver={this.arrowVisibel}
        onMouseOut={this.arrowHidden}
      >
        <img src={ele.main_url} alt="img" />
      </div>
    ));
  };
  render() {
    const { images } = this.props;

    const mainSettings = {
      customPaging: function(i) {
        return (
          <div>
            <img alt="thumbnail" src={images[i].main_url} />
          </div>
        );
      },
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

    return (
      <>
        <Slider ref={ref => (this.slider = ref)} {...mainSettings}>
          {window.innerHeight <= 800
            ? this.mapOfMainImg(images.slice(0, 8))
            : this.mapOfMainImg(images.slice(0, 10))}
        </Slider>
        <div
          className="main_left_button"
          onClick={() => {
            this.slider.slickPrev();
          }}
          onMouseOver={this.arrowVisibel}
          ref={ref => (this.left = ref)}
        ></div>
        <div
          className="main_right_button"
          onClick={() => {
            this.slider.slickNext();
          }}
          onMouseOver={this.arrowVisibel}
          ref={ref => (this.right = ref)}
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
