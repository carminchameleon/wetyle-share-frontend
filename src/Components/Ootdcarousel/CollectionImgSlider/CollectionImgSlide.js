import React, { Component } from "react";

import "./CollectionImgSlide.scss";

class CollectionImgSlide extends Component {
  render() {
    const { data, key } = this.props;
    console.log(data, "data");
    return (
      <div
        key={key}
        className="collection_wrapper"
        onMouseOver={this.arrowVisibel}
        onMouseOut={this.arrowHidden}
      >
        {data.image_url ? <img src={data.image_url} alt="img" /> : ""}
      </div>
    );
  }
}

export default CollectionImgSlide;
