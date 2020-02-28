import React, { Component } from "react";

import "./MainImgSlider.scss";
class MainImgSlider extends Component {
  render() {
    const { data, key, over, out } = this.props;
    return (
      <div key={key} className="img_wrapper">
        <img
          src={data.main_url}
          alt="img"
          onMouseOver={over}
          onMouseOut={out}
        />
      </div>
    );
  }
}

export default MainImgSlider;
