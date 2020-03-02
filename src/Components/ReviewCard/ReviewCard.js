import React, { Component } from "react";
import "./ReviewCard.scss";

class ReviewCard extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="cardInfo">
        {/* 대표 이미지 */}
        <div className="scale_photo_parent">
          <div className="scale_photo">
            <img src={this.props.photo} className="post_photo" />
          </div>
        </div>
        <div className="flex_row">
          {/* 프로필사진 */}
          <div className="circle_photo">
            <img src={this.props.profile} className="profile_photo" />
          </div>
          {/* 유저 이름이랑 후기내용 */}
          <span className="flex_column">
            <div className="under_box_info">
              <span className="person_post_text">
                <span className="person_nickname">{this.props.nickName}</span>
                {this.props.post}
              </span>
            </div>
            {/* 회색글씨 좋아요랑 댓글 갯수 */}
            <div className="like_and_comment">
              <span className="like">좋아요 {this.props.like}</span>
              <span className="comment">댓글 {this.props.comment}</span>
            </div>
          </span>
        </div>
      </div>
    );
  }
}
export default ReviewCard;
