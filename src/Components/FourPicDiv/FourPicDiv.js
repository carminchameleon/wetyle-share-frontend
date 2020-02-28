import React, { Component } from "react";
import "./FourPicDiv.scss";

class FourPicDiv extends Component {
  constructor(props) {
    super();

    this.state = {
      data: []
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
          data: res.data
        })
      );
  };

  render() {
    const fourDiv = this.state.data.map(person => {
      return (
        <div className="cardInfo">
          {/* 대표 이미지 */}
          <div className="scale_photo_parent">
            <div className="scale_photo">
              <img src={person.photo} className="post_photo" />
            </div>
          </div>
          <div className="flex_row">
            {/* 프로필사진 */}
            <div className="circle_photo">
              <img src={person.profile} className="profile_photo" />
            </div>
            {/* 유저 이름이랑 후기내용 */}
            <span className="flex_column">
              <div className="under_box_info">
                <span className="person_post_text">
                  <span className="person_nickname">{person.nickName}</span>
                  {person.post}
                </span>
              </div>
              {/* 회색글씨 좋아요랑 댓글 갯수 */}
              <div className="like_and_comment">
                <span className="like">좋아요 {person.like}</span>
                <span className="comment">댓글 {person.comment}</span>
              </div>
            </span>
          </div>
        </div>
      );
    });

    return (
      <div className="four_pic_div">
        <div className="whats_this_box">
          <h1 className="whats_this_box_text">상품 후기 68</h1>
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
        <div className="one_of_div">{fourDiv}</div>

        <div className="see_more_info">
          <a className="see_more_info_text">후기 스타일 모두 보기</a>
        </div>
      </div>
    );
  }
}
export default FourPicDiv;
