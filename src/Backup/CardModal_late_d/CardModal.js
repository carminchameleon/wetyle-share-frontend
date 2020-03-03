import React from "react";
import { Modal } from "reactstrap";

import autosize from "autosize";
import Ootdcarousel from "../../Components/Ootdcarousel/Ootdcarousel";

import "./CardModal.scss";

class CardModal extends React.Component {
  state = {
    collectionMove: 0,
    moadlData: [],
    imgdata: [],
    follower: false,
    like: false
  };
  componentDidMount = () => {
    this.getModalData();
    this.getimg();
  };
  getModalData = () => {
    fetch("http://localhost:3000/data/modal.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          moadlData: res.data
        });
      });
  };
  getimg = () => {
    fetch("http://localhost:3000/data/trendcard.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          imgdata: res.data
        });
      });
  };
  handleFollower = () => {
    this.setState({
      follower: !this.state.follower
    });
  };
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const { toggle, modal } = this.props;
    autosize(document.querySelector("textarea"));

    return (
      <div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className="card_modal_wrapper"
          contentClassName="card_modal"
        >
          <div className="modal_main" style={{ display: "flex" }}>
            <div className="left_img">
              <div className="main_img">
                <Ootdcarousel images={this.state.imgdata} />
              </div>
            </div>

            <div className="right_feed">
              <div className="info_wrapper">
                <div className="info_top">
                  <div className="profile_picture">
                    <img
                      src="https://usercontents-c.styleshare.io/images/37223214/40x40"
                      alt="img"
                    />
                  </div>
                  <div className="user_information">
                    <div className="user_nick">아랑</div>
                    <div className="user_add_info">
                      insta @raninfanta 문의 DM
                    </div>
                  </div>
                  <div
                    onClick={this.handleFollower}
                    className={
                      this.state.follower
                        ? "follower_btn_check"
                        : "follower_btn"
                    }
                  ></div>
                </div>
                <p className="desc">
                  블랙이 조아요! 모두 코로나 조심하세요 🥶🥶..블랙이 조아요!
                  모두 코로나 조심하세요 🥶🥶..블랙이 조아요! 모두 코로나
                  조심하세요 🥶🥶..블랙이 조아요! 모두 코로나 조심하세요
                  🥶🥶..블랙이 조아요! 모두 코로나 조심하세요 🥶🥶..블랙이
                  조아요! 모두 코로나 조심하세요 🥶🥶..블랙이 조아요! 모두
                  코로나 조심하세요 🥶🥶..블랙이 조아요! 모두 코로나 조심하세요
                  🥶🥶..블랙이 조아요! 모두 코로나 조심하세요 🥶🥶..블랙이
                  조아요! 모두 코로나 조심하세요 🥶🥶..블랙이 조아요! 모두
                  코로나 조심하세요 🥶🥶..블랙이 조아요! 모두 코로나 조심하세요
                  🥶🥶..블랙이 조아요! 모두 코로나 조심하세요 🥶🥶..블랙이
                  조아요! 모두 코로나 조심하세요 🥶🥶..블랙이 조아요! 모두
                  코로나 조심하세요 🥶🥶..블랙이 조아요! 모두 코로나 조심하세요
                  🥶🥶..블랙이 조아요! 모두 코로나 조심하세요 🥶🥶..블랙이
                  조아요! 모두 코로나 조심하세요 🥶🥶..블랙이 조아요! 모두
                  코로나 조심하세요 🥶🥶..블랙이 조아요! 모두 코로나 조심하세요
                  🥶🥶..블랙이 조아요! 모두 코로나 조심하세요 🥶🥶.. <br />
                  <br />
                  💟유튜브 : ANAran 아나란💟
                  <br /> 💟인스타 : raninfanta 💟
                  <br /> <br />
                  <div>
                    <a>#코디</a>
                  </div>
                </p>
              </div>
              <div className="like_wrapper">
                <div className="button_group">
                  <div
                    className={this.state.like ? "like_check" : "like"}
                    onClick={this.handleLike}
                  ></div>
                  <div
                    className={
                      this.state.like ? "like_count_check" : "like_count"
                    }
                  >
                    107
                  </div>
                </div>
                <div className="like_more"></div>
              </div>
              <div className="comment_wrapper">
                <div className="comment_title">
                  <p className="title_left">댓글(1)</p>
                </div>

                <div className="comment_list">
                  <div className="comment_item">
                    <img
                      alt="img"
                      src="https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png"
                    />
                    <div className="right_box">
                      <p>
                        <a>지우</a>게시물 좋아요 팔로우 부탁드려용 💏
                      </p>
                      <p>20.02.24</p>
                    </div>
                  </div>
                  {/* 댓글 리스트 메소드 Map 구현 */}
                </div>
                <div className="comment_list">
                  <div className="comment_item">
                    <img
                      alt="img"
                      src="https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png"
                    />
                    <div className="right_box">
                      <p>
                        <a>지우</a>게시물 좋아요 팔로우 부탁드려용 💏
                      </p>
                      <p>20.02.24</p>
                    </div>
                  </div>
                  {/* 댓글 리스트 메소드 Map 구현 */}
                </div>
                <div className="comment_list">
                  <div className="comment_item">
                    <img
                      alt="img"
                      src="https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png"
                    />
                    <div className="right_box">
                      <p>
                        <a>지우</a>게시물 좋아요 팔로우 부탁드려용 💏
                      </p>
                      <p>20.02.24</p>
                    </div>
                  </div>
                  {/* 댓글 리스트 메소드 Map 구현 */}
                </div>
                <div className="comment_list">
                  <div className="comment_item">
                    <img
                      alt="img"
                      src="https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png"
                    />
                    <div className="right_box">
                      <p>
                        <a>지우</a>게시물 좋아요 팔로우 부탁드려용 💏
                      </p>
                      <p>20.02.24</p>
                    </div>
                  </div>
                  {/* 댓글 리스트 메소드 Map 구현 */}
                </div>
                <div className="comment_list">
                  <div className="comment_item">
                    <img
                      alt="img"
                      src="https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png"
                    />
                    <div className="right_box">
                      <p>
                        <a>지우</a>게시물 좋아요 팔로우 부탁드려용 💏
                      </p>
                      <p>20.02.24</p>
                    </div>
                  </div>
                  {/* 댓글 리스트 메소드 Map 구현 */}
                </div>
                <div className="comment_list">
                  <div className="comment_item">
                    <img
                      alt="img"
                      src="https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png"
                    />
                    <div className="right_box">
                      <p>
                        <a>지우</a>게시물 좋아요 팔로우 부탁드려용 💏
                      </p>
                      <p>20.02.24</p>
                    </div>
                  </div>
                  {/* 댓글 리스트 메소드 Map 구현 */}
                </div>
                <div className="comment_list">
                  <div className="comment_item">
                    <img
                      alt="img"
                      src="https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png"
                    />
                    <div className="right_box">
                      <p>
                        <a>지우</a>게시물 좋아요 팔로우 부탁드려용 💏
                      </p>
                      <p>20.02.24</p>
                    </div>
                  </div>
                  {/* 댓글 리스트 메소드 Map 구현 */}
                </div>
                <div className="comment_input">
                  <textarea
                    className="add_input"
                    placeholder="댓글을 남기세요..."
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

export default CardModal;
