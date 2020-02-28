import React, { Component } from "react";

import "./MainImgSlider.scss";
class MainImgSlider extends Component {
  render() {
    const { data, key, over, out } = this.props;
    return (
      <div
        key={key}
        className="img_wrapper"
        onMouseOver={over}
        onMouseOut={out}
      >
        <img src={data.main_url} alt="img" />
      </div>
    );
  }
}

export default MainImgSlider;
