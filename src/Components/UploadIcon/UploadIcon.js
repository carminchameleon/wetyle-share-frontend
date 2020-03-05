import React, { Component } from "react";

import UploadModal from "../Modal/UploadModal";

import "./UploadIcon.scss";

class UploadIcon extends Component {
  state = {
    topButton: false,
    modal: false,
    showUploadModal: false
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll, true);
  };
  componentWillMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (document.documentElement.scrollTop !== 0) {
      this.setState({
        topButton: true
      });
    } else {
      this.setState({
        topButton: false
      });
    }
  };
  handleTopButton = () => {
    const location = document.querySelector(".OOTD_wrapper").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };
  handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    this.setState({ showUploadModal: true });
  };

  handleCloseModal = () => {
    document.body.style.overflow = "visible";
    this.setState({ showUploadModal: false });
  };
  render() {
    return (
      <div className="uploadicon_wrapper">
        <UploadModal
          showUploadModal={this.state.showUploadModal}
          handleCloseModal={this.handleCloseModal}
          handleOpenModal={this.handleOpenModal}
        />
        <div className="uploadicon_inner">
          <div
            onClick={this.handleTopButton}
            className={this.state.topButton ? "to_top_visible" : "to_top"}
          ></div>
          <div className="upload_icon_wrapper">
            <span className="upload_icon" onClick={this.handleOpenModal}></span>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadIcon;
