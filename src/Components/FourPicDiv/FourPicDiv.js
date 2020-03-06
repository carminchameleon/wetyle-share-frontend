import React, { Component } from "react";
import "./FourPicDiv.scss";
// import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewCard from "../ReviewCard/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import ArrowRight from "../../Img/ArrowRight.png";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "-50px",
        right: "0px",
        width: "30px",
        height: "30px"
      }}
      onClick={onClick}
    >
      <img
        src="https://image.flaticon.com/icons/svg/748/748073.svg"
        alt=""
        className="left_arrow_slick_review"
      />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "-50px",
        right: "40px",
        width: "30px",
        height: "30px"
      }}
      onClick={onClick}
    >
      <img
        src="https://image.flaticon.com/icons/svg/748/748073.svg"
        alt=""
        className="right_arrow_slick_review"
      />
    </div>
  );
}

class FourPicDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review_data: []
    };
  }

  componentDidMount = () => {
    // 처음 render될 때 무엇인가 보여주고 싶을 때 쓰는 것이 componentDidMount
    fetch("http://localhost:3000/data/data.json")
      .then(res => {
        return res.json();
      })
      .then(res =>
        this.setState({
          review_data: res.review_data
        })
      );
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="four_pic_div">
        <div className="whats_this_box">
          <h1 className="whats_this_box_text">{this.props.title}</h1>
          <div className="button_box">
            {/* <button className="left_button">
              <img
                src="https://image.flaticon.com/icons/svg/748/748073.svg"
                alt=""
                className="left_img"
              />
            </button>
            <button className="right_button">
              <img
                src="https://image.flaticon.com/icons/svg/748/748073.svg"
                alt=""
                className="right_img"
              />
            </button> */}
          </div>
        </div>
        <div className="review_container">
          <Slider {...settings}>
            {/* div 하나 정체 */}
            {this.state.review_data.map(person => {
              return (
                // <div className="one_of_div">
                <ReviewCard
                  photo={person.photo}
                  profile={person.profile}
                  nickName={person.nickName}
                  post={person.post}
                  like={person.like}
                  comment={person.comment}
                />
                // </div>
              );
            })}
          </Slider>
        </div>
        <div className="see_more_info">
          <a className="see_more_info_text">후기 스타일 모두 보기</a>
        </div>
      </div>
    );
  }
}
export default FourPicDiv;
