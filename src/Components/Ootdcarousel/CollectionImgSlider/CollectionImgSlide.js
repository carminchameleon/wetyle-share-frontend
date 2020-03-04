import React, { Component } from "react";

import "./CollectionImgSlide.scss";

class CollectionImgSlide extends Component {
  render() {
    const { data, key } = this.props;
    return (
      <div
        key={key}
        className="collection_wrapper"
        onMouseOver={this.arrowVisibel}
        onMouseOut={this.arrowHidden}
      >
        <img src={data.main_url} alt="img" />
      </div>
    );
  }
}

export default CollectionImgSlide;
