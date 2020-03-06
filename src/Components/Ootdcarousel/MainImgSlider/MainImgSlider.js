import React, { Component } from "react";

import "./MainImgSlider.scss";
class MainImgSlider extends Component {
  render() {
    const { data, key, over, out } = this.props;
    return (
      <div key={key} className="img_wrapper">
        <img src={data} alt="img" onMouseEnter={over} onMouseLeave={out} />
      </div>
    );
  }
}

export default MainImgSlider;
