import React, { Component } from "react";
import Slider from "react-slick";
import man from "Img/bag.png";
import MainImgSlider from "./MainImgSlider/MainImgSlider";
import CollectionImgSlide from "./CollectionImgSlider/CollectionImgSlide";

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
    if (images) {
      return images.map((ele, idx) => (
        <MainImgSlider
          over={this.arrowVisibel}
          out={this.arrowHidden}
          arrow={this.state.arrowVisibel}
          data={ele}
          key={idx}
        />
      ));
    }
  };

  mapOfCollection = images => {
    console.log(images);
    if (images) {
      return images.collection.map((ele, idx) => (
        <CollectionImgSlide data={ele} key={idx} />
      ));
    }
  };

  render() {
    const { images, colletionData } = this.props;
    const mainSettings = {
      ...mainSettingsVar,
      customPaging: function(i) {
        return (
          <div>
            <img alt="thumbnail" src={images[i]} />
          </div>
        );
      }
    };
    console.log(images);
    return (
      <>
        <Slider ref={ref => (this.slider = ref)} {...mainSettings}>
          {this.mapOfMainImg(images)}
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
          onMouseEnter={this.arrowVisibel}
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
          onMouseEnter={this.arrowVisibel}
        ></div>
        <>
          <div className="collection">
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
              {this.mapOfCollection(colletionData.result)}
              {colletionData.result.collection.images ? (
                <div className="collection_more">더 보기</div>
              ) : (
                ""
              )}
            </Slider>
          </div>
        </>
      </>
    );
  }
}

export default Ootdcarousel;
