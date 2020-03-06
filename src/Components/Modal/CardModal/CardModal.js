import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { SERVER_URL } from "config";
import Modal from "react-modal";
import autosize from "autosize";

import Ootdcarousel from "../../Ootdcarousel/Ootdcarousel";
import "./CardModal.scss";

Modal.setAppElement("#root");
class CardModal extends Component {
  state = {
    subtitle: "",
    comment: "",
    collectionMove: 0,
    moadlData: [],
    imgdata: [],
    follower: false,
    like: this.props.like === (false || null) ? false : true,
    commentList: this.props.commentList
  };

  handleFollower = id => {
    this.handleFollowerBtn(id);
    this.setState({
      follower: !this.state.follower
    });
  };
  handleLike = () => {
    this.handleLikeBtn();
  };
  handleOnchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFollowerBtn = () => {
    const cardId = this.props.location.search.split("=")[1];
    fetch(`${SERVER_URL}/user/follow/${cardId}`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Ilx1Yzc3NFx1Yzg4NVx1YmJmY19pZCJ9.RMSp0p5meKl6Pn81hwkAMb2cucMJ1fPLmB-DtqdI5Kk"
      }
    }).then(this.props.getLikeReset);
  };
  handleLikeBtn = () => {
    const cardId = this.props.location.search.split("=")[1];
    fetch(`${SERVER_URL}/card/style/like/${cardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Ilx1Yzc3NFx1Yzg4NVx1YmJmY19pZCJ9.RMSp0p5meKl6Pn81hwkAMb2cucMJ1fPLmB-DtqdI5Kk"
      }
    }).then(this.props.getLikeReset);
  };
  handleAddComment = () => {
    const cardId = this.props.location.search.split("=")[1];
    fetch(`${SERVER_URL}/card/style/comment/${cardId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Ilx1Yzc3NFx1Yzg4NVx1YmJmY19pZCJ9.RMSp0p5meKl6Pn81hwkAMb2cucMJ1fPLmB-DtqdI5Kk"
      },
      body: JSON.stringify({
        description: this.state.comment
      })
    }).then(this.props.getCommentList);
  };
  mapOfCommentList = data => {
    console.log(data);
    if (data) {
      return data.map((ele, idx) => (
        <div className="comment_list" key={idx}>
          <div className="comment_item">
            <img alt="img" src={ele.profile_image} />
            <div className="right_box">
              <p>
                <a>{ele.nickname}</a>
                {ele.description}
              </p>
              <p>{ele.date}</p>
            </div>
          </div>
        </div>
      ));
    }
  };
  render() {
    console.log(this.props.like);
    const {
      handleCloseModal,
      showModal,
      cardInfo,
      colletionData,
      commentList,
      relateditem
    } = this.props;
    autosize(document.querySelector("textarea"));

    if (!cardInfo) return null;
    return (
      <div>
        <Modal
          isOpen={showModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          className="card_modal"
          onRequestClose={handleCloseModal}
          overlayClassName="Overlay"
        >
          <div className="modal_main">
            <div>
              <div className="left_img">
                <div className="main_img">
                  <Ootdcarousel
                    images={cardInfo && cardInfo.style_image_url}
                    colletionData={colletionData}
                  />
                </div>
              </div>
            </div>

            <div className="right_feed">
              {relateditem[0] && (
                <div className="related_item_wrapper">
                  {relateditem[0].etc && (
                    <div className="item_ele">
                      <span className="top_icon" />
                      <div className="item_desc">
                        <div className="desc_title">Top</div>
                        <div className="desc_content">{relateditem[0].etc}</div>
                      </div>
                    </div>
                  )}
                  {relateditem[0].skirt && (
                    <div className="item_ele">
                      <span className="outer_icon" />
                      <div className="item_desc">
                        <div className="desc_title">Outer</div>
                        <div className="desc_content">
                          {relateditem[0].skirt}
                        </div>
                      </div>
                    </div>
                  )}
                  {relateditem[0].pants && (
                    <div className="item_ele">
                      <span className="bottom_icon" />
                      <div className="item_desc">
                        <div className="desc_title">Pants</div>
                        <div className="desc_content">
                          {relateditem[0].pants}
                        </div>
                      </div>
                    </div>
                  )}
                  {relateditem[0].shoes && (
                    <div className="item_ele">
                      <span className="shoes_icon" />
                      <div className="item_desc">
                        <div className="desc_title">Shoes</div>
                        <div className="desc_content">
                          {relateditem[0].shoes}
                        </div>
                      </div>
                    </div>
                  )}
                  {relateditem[0].bag && (
                    <div className="item_ele">
                      <span className="bag_icon" />
                      <div className="item_desc">
                        <div className="desc_title">bag</div>
                        <div className="desc_content">{relateditem[0].bag}</div>
                      </div>
                    </div>
                  )}
                  {relateditem[0].accessory && (
                    <div className="item_ele">
                      <span className="accessory_icon" />
                      <div className="item_desc">
                        <div className="desc_title">Accessory</div>
                        <div className="desc_content">
                          {relateditem[0].accessory}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="info_wrapper">
                <div className="info_top">
                  <div className="profile_picture">
                    <img
                      src="https://usercontents-c.styleshare.io/images/37223214/40x40"
                      alt="img"
                    />
                  </div>
                  <div className="user_information">
                    <div className="user_nick">{cardInfo.nickname}</div>
                    <div className="user_add_info">
                      {cardInfo.profile_description}
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      this.handleFollower();
                    }}
                    className={
                      this.state.follower
                        ? "follower_btn_check"
                        : "follower_btn"
                    }
                  ></div>
                </div>
                <div className="desc_wrapper">
                  <p className="desc">{cardInfo.description}</p>
                </div>
              </div>
              <div className="like_wrapper">
                <div className="button_group">
                  <div
                    className={
                      this.state.like === false ? "like" : "like_check"
                    }
                    onClick={() => {
                      console.log(this.state.like);
                      this.setState({
                        like: !this.state.like
                      });
                      this.handleLike();
                    }}
                  ></div>
                  <div
                    className={
                      this.state.like === false
                        ? "like_count "
                        : "like_count like_count_check"
                    }
                  >
                    {cardInfo.like_count}
                  </div>
                </div>
                <div className="like_more"></div>
              </div>
              <div className="comment_wrapper">
                <div className="comment_title">
                  <p className="title_left">
                    댓글(
                    {commentList[0] && commentList[0].comment_count})
                  </p>
                </div>
                {this.mapOfCommentList(
                  commentList[0] && commentList[0].comment
                )}

                <div className="comment_input">
                  <textarea
                    className="add_input"
                    placeholder="댓글을 남기세요..."
                    name="comment"
                    onChange={this.handleOnchange}
                    value={this.state.comment}
                    onKeyPress={e => {
                      if (e.charCode === 13) {
                        e.preventDefault();
                        this.handleAddComment();
                        this.setState({ comment: "" });
                      }
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
ReactDOM.render(<CardModal />, document.querySelector("#root"));

export default withRouter(CardModal);
