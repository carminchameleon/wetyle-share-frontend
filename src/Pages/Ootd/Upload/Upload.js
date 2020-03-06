import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SERVER_URL } from "config";
import swal from "sweetalert";
import OotdTop from "../../../Components/Top/OotdTop";
import "./Upload.scss";
class Upload extends Component {
  state = {
    imgUrl: "", // 파일 url
    imgFile: null, // 이미지파일
    content: "",
    select: 0,
    url: null,
    visiList: [],
    sendUrl: "",
    resultList: []
  };
  handleChangeFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    this.setState(
      {
        url: e.target.files[0]
      },
      () => {
        this.handlePost();
      }
    );
    reader.onloadend = e => {
      this.setState(
        {
          imgUrl: e.target.result
        },
        () => {
          this.setState({
            visiList: this.state.visiList.concat(this.state.imgUrl)
          });
        }
      );
    };
  };
  handlePost = () => {
    const formData = new FormData();
    formData.append("filename", this.state.url);
    fetch(`http://10.58.1.114:8000/card/upload/image`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Ilx1Yzc3NFx1Yzg4NVx1YmJmY19pZCJ9.RMSp0p5meKl6Pn81hwkAMb2cucMJ1fPLmB-DtqdI5Kk"
      },
      body: formData
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          resultList: this.state.resultList.concat(res.image_url_list)
        })
      )
      .then(res => console.log(this.state.resultList));
  };
  handleStyleUpload = () => {
    if (!this.state.content) {
      swal("", "설명을 입력해주세요!", "error");
    } else if (this.state.resultList.length === 0) {
      swal("", "이미지를 업로드 해주세요!", "error");
    } else {
      fetch("http://10.58.1.114:8000/card/style/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Ilx1Yzc3NFx1Yzg4NVx1YmJmY19pZCJ9.RMSp0p5meKl6Pn81hwkAMb2cucMJ1fPLmB-DtqdI5Kk"
        },
        body: JSON.stringify({
          description: this.state.content,
          image_url_list: this.state.resultList.filter(data => data !== null)
        })
      }).then(
        swal("", "스타일 업로드 완료", "success").then(() => {
          this.props.history.goBack();
        })
      );
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleCloseHide = () => {
    this.setState({
      select: null
    });
  };
  mapOfImg = data => {
    return data.map((ele, idx) => (
      <div className="img_wrapper" key={idx}>
        <img
          className={`${idx}_img`}
          src={ele}
          alt="img"
          onMouseEnter={() => {
            this.setState({
              select: `${idx} img_select`
            });
          }}
          onMouseOut={this.handleCloseHide}
        />
        {this.state.select === `${idx} img_select` ? (
          <div
            className={`${idx} img_select`}
            onMouseEnter={() => {
              this.setState({
                select: `${idx} img_select`
              });
            }}
            onMouseOut={this.handleCloseHide}
            onClick={() => {
              delete this.state.visiList[idx];
              delete this.state.resultList[idx];
            }}
          >
            X
          </div>
        ) : (
          ""
        )}
      </div>
    ));
  };
  render() {
    return (
      <div className="OOTD_wrapper">
        <OotdTop />
        <div className="upload_wrapper">
          <div className="upload_inner">
            <div className="upload_main">
              <div className="picture">
                <p>스타일 이미지</p>
                <div className="picture_upload">
                  {this.state.visiList.length > 0 &&
                    this.mapOfImg(this.state.visiList)}
                  <label for="upload_file" onChange={this.handleChangeFile}>
                    <div className="plus_icon" />
                    <input
                      type="file"
                      id="upload_file"
                      name="myFile"
                      accept=".png, .jpg, .jpeg"
                    />
                  </label>
                </div>
              </div>
              <div className="upload_desc">
                <p>설명</p>
                <textarea
                  name="content"
                  placeholder="내용을 입력해주세요"
                  value={this.state.content}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <div className="upload_submit_wrapper">
              <div className="upload_submit" onClick={this.handleStyleUpload}>
                올리기
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Upload);
