import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
import { SERVER_URL } from "config";
import swal from "sweetalert";

import "./UploadModal.scss";

Modal.setAppElement("#modal");
class UploadModal extends Component {
  state = {
    left: false,
    right: false,
    collectionModal: false,
    collection_title: "",
    collectoin_desc: "",
    collection_url: null,
    collection_file: null,
    resultList: []
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
  handleChange = e => {
    if (e.target.name === "collection_title") {
      if (e.target.value.length < 25) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  handleChangeFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    this.setState(
      {
        collection_file: file
      },
      () => {
        this.handlePost();
      }
    );
    reader.onloadend = e => {
      this.setState({
        collection_url: e.target.result
      });
    };
  };
  handlePost = () => {
    const formData = new FormData();
    formData.append("filename", this.state.collection_file);

    fetch(`${SERVER_URL}/card/upload/image`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Impvbmd0a2ZrZCJ9.TburqDu3-81bWqGKbRutBcqHADIB955vipm-oJbRbu4"
      },
      body: formData
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          resultList: this.state.resultList.concat(res.image_url_list)
        })
      )
      .then(res => console.log(res));
  };
  handleCollectionUpload = () => {
    if (!this.state.collection_title) {
      swal("", "콜렉션 이름을 입력해주세요!", "error");
    } else if (!this.state.collectoin_desc) {
      swal("", "콜렉션 설명d을 입력해주세요!", "error");
    } else if (!this.state.collection_url) {
      swal("", "이미지를 업로드 해주세요!", "error");
    } else {
      fetch(`${SERVER_URL}/card/collection/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Impvbmd0a2ZrZCJ9.TburqDu3-81bWqGKbRutBcqHADIB955vipm-oJbRbu4"
        },
        body: JSON.stringify({
          name: this.state.collection_title,
          description: this.state.collectoin_desc,
          image_url: this.state.resultList
        })
      }).then(
        swal("", "컬렉션 업로드 완료", "success").then(() => {
          this.props.handleCloseModal();
        })
      );
    }
  };
  render() {
    const { showUploadModal, handleCloseModal } = this.props;

    return (
      <div>
        <Modal
          isOpen={showUploadModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          className="upload_modal"
          overlayClassName="Overlay"
          onRequestClose={handleCloseModal}
        >
          <div className="modal_main">
            <div className="modal_top">
              <p>업로드</p>
              <div className="close_btn" onClick={handleCloseModal}></div>
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
                  shouldCloseOnOverlayClick={true}
                  shouldCloseOnEsc={true}
                  className="collection_modal"
                  overlayClassName="Overlay_collection"
                  onRequestClose={this.collectionToggle}
                >
                  <div className="collection_modal">
                    <div className="collection_modal_top">
                      <p>콜렉션 만들기</p>
                      <div
                        className="collection_close_box"
                        onClick={this.collectionToggle}
                      />
                    </div>
                    <div className="collection_modal_bottom">
                      <div className="collection_main">
                        <p>미리보기</p>

                        <div className="collection_img">
                          <label for="file" onChange={this.handleChangeFile}>
                            <input
                              type="file"
                              id="file"
                              alt="img"
                              accept=".png, .jpg, .jpeg"
                            />
                          </label>

                          <div className="span_wrapper">
                            <div className="span_inner">
                              <p>
                                {this.state.collection_title
                                  ? this.state.collection_title
                                  : "콜렉션 제목(필수)"}
                              </p>
                            </div>
                          </div>
                          {this.state.collection_url ? (
                            <img src={this.state.collection_url} alt="img" />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="collection_title">
                        <p>제목</p>
                        <textarea
                          placeholder="콜렉션의 이름을 정해주세요(최대25자)"
                          name="collection_title"
                          value={this.state.collection_title}
                          onChange={this.handleChange}
                        ></textarea>
                      </div>
                      <div className="collection_title">
                        <p>설명</p>
                        <textarea
                          placeholder="이 콜렉션은 어떤 내용인가요?"
                          name="collectoin_desc"
                          value={this.state.collectoin_desc}
                          onChange={this.handleChange}
                        ></textarea>
                      </div>
                      <div className="collection_create_wrapper">
                        <div
                          className={
                            this.state.collection_title &&
                            this.state.collectoin_desc
                              ? "collection_icon_active"
                              : "colleciont_create"
                          }
                          onClick={this.handleCollectionUpload}
                        >
                          만들기
                        </div>
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

ReactDOM.render(<UploadModal />, document.querySelector("#modal"));
export default withRouter(UploadModal);
