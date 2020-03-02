import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "reactstrap";
import "./UploadModal.scss";

class UploadModal extends Component {
  state = {
    left: false,
    right: false,
    collectionModal: false
  };
  leftToggle = () => {
    this.setState({
      left: !this.state.left
    });
  };
  rightToggle = () => {
    this.setState({
      right: !this.state.right
    });
  };
  uploadPage = () => {
    this.props.history.push("/upload");
  };

  collectionToggle = () => {
    this.setState({
      collectionModal: !this.state.collectionModal
    });
  };
  render() {
    const { toggle, modal } = this.props;
    const externalCloseBtn = (
      <div
        style={{ position: "absolute", visibility: "hidden" }}
        onClick={toggle}
      ></div>
    );
    return (
      <div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          external={externalCloseBtn}
          className="upload_wrapper"
          contentClassName="upload_modal"
        >
          <div className="modal_main">
            <div className="modal_top">
              <p>업로드</p>
              <div className="close_btn" onClick={toggle}></div>
            </div>
            <div className="modal_bottom">
              <div className="left_btn">
                <div
                  className="style_btn"
                  onMouseEnter={this.leftToggle}
                  onMouseLeave={this.leftToggle}
                  onClick={this.uploadPage}
                >
                  <span
                    className={
                      this.state.left ? "style_icon" : "style_icon_hover"
                    }
                  ></span>
                </div>
                <p>스타일 업로드</p>
              </div>
              <div className="right_btn">
                <div
                  className="collection_btn"
                  onMouseLeave={this.rightToggle}
                  onMouseEnter={this.rightToggle}
                  onClick={this.collectionToggle}
                >
                  <span
                    className={
                      this.state.right
                        ? "collection_icon"
                        : "collection_icon_hover"
                    }
                  ></span>
                </div>
                <p>콜렉션 만들기</p>
                <Modal
                  isOpen={this.state.collectionModal}
                  toggle={this.collectionToggle}
                  external={externalCloseBtn}
                  className="collection_wrapper"
                  contentClassName="collection_modal"
                  modalClassName="collection_backdrop"
                >
                  <div className="collection_modal">
                    <div className="collection_modal_top">
                      <p>콜렉션 만들기</p>
                      <div className="collection_close_box"></div>
                    </div>
                    <div className="collection_modal_bottom">
                      <div className="collection_main">
                        <p>미리보기</p>
                        <div className="collection_img">
                          <div className="gradient" />
                          <label>
                            <input />
                          </label>
                          <p></p>
                        </div>
                      </div>
                      <div className="collection_title">
                        <p>제목</p>
                        <textarea
                          placeholder="콜렉션의 이름을 정해주세요"
                          cols="2"
                        ></textarea>
                      </div>
                      <div className="collection_title">
                        <p>설명</p>
                        <textarea placeholder="이 콜렉션은 어떤 내용인가요?"></textarea>
                      </div>
                      <div className="collection_create_wrapper">
                        <div className="colleciont_create">만들기</div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(UploadModal);
