import React, { Component } from "react";
import "./FourPicDiv.scss";
// import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewCard from "../ReviewCard/ReviewCard";

class FourPicDiv extends Component {
  constructor(props) {
    super();

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
    return (
      <div className="four_pic_div">
        <div className="whats_this_box">
          <h1 className="whats_this_box_text">{this.props.title}</h1>
          <div className="button_box">
            <button className="left_button">
              {/* <img
                src="https://image.flaticon.com/icons/svg/748/748073.svg"
                className="left_img"
              /> */}
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
            </button>
          </div>
        </div>

        {/* div 하나 정체 */}
        <div className="one_of_div">
          {this.state.review_data.map(person => {
            return (
              <ReviewCard
                photo={person.photo}
                profile={person.profile}
                nickname={person.nickname}
                post={person.post}
                like={person.like}
                comment={person.comment}
              />
            );
          })}
        </div>

        <div className="see_more_info">
          <a className="see_more_info_text">후기 스타일 모두 보기</a>
        </div>
      </div>
    );
  }
}
export default FourPicDiv;
