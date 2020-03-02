import React, { Component } from "react";

import OotdTop from "../../../Components/Top/OotdTop";

import "./Upload.scss";

class Upload extends Component {
  state = {
    imgUrl: [], // 파일 url
    imgFile: [], // 이미지파일
    content: "",
    select: 0
  };
  handleChangeFile = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    this.setState({ imgFile: file });

    reader.onloadend = e => {
      this.setState({
        imgUrl: this.state.imgUrl.concat(e.target.result)
      });
    };
  };
  //   handlePcFileUpload = () => {
  //     this.fileUpload(this.state.pcFile, "pcImage");
  //   };

  //   fileUpload = (file, fileType) => {
  //     if (file !== null) {
  //       console.log(file);

  //       console.log(fileType);

  //       const formData = new FormData();

  //       formData.append("upload", file);
  //       formData.append("is_secret", "False");
  //       formData.append("group_id", 20);

  //       fetch(`${constants.URL_BACK}/files`, {
  //         method: "POST",
  //         headers: {
  //           Authorization: token
  //         },
  //         body: formData
  //       })
  //         .then(response => response.json())
  //         .then(response => {
  //           console.log("----file 부분----");
  //           console.log(response);

  //           console.log(response.message);
  //           console.log(response.guid);

  //           if (response.message === "SAVE_SUCCESS") {
  //             swal("", "파일 저장이 완료되었습니다.", "success");

  //             console.log(response.guid);

  //             this.setState({
  //               [fileType]: response.guid
  //             });
  //           } else {
  //             swal("", "파일 저장에 실패했습니다.", "error");
  //           }
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     } else {
  //       console.log(file);

  //       swal("", "파일을 등록해 주십시오", "error");
  //     }
  //   };
  handleRemove = () => {
    this.setState({
      imgUrl: [],
      imgFile: []
    });
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
      <div className="img_wrapper">
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
            onClick={this.handleRemove}
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
                  {this.mapOfImg(this.state.imgUrl)}
                  <label for="ex_file">
                    <div className="plus_icon" />
                    <input
                      type="file"
                      id="ex_file"
                      accept=".png, .jpg, .jpeg"
                      onChange={this.handleChangeFile}
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
              <div className="upload_submit">올리기</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
