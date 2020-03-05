import React, { Component } from "react";
import "./BrandBox.scss";

class BrandBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="a_parent">
        {/* <a
                    href="https://www.nike.com/kr/ko_kr/w/men/ap"
                    className="brand_photo_link_size"
                  > */}
        <div className="brand_box_parent">
          <a
            href="https://www.nike.com/kr/ko_kr/w/men/ap"
            className="brand_photo_link_size"
          >
            <div className="brand_img_btn_parent">
              <div className="brand_img_box">
                <img
                  className="brand_photo"
                  data-sizes="auto"
                  data-src={this.props.url}
                  // data-srcset="https://usercontents-c.styleshare.io/images/21126903/200x112 200w, https://usercontents-c.styleshare.io/images/21126903/320x179 320w, https://usercontents-c.styleshare.io/images/21126903/480x269 480w, https://usercontents-c.styleshare.io/images/21126903/750x420 750w, https://usercontents-c.styleshare.io/images/21126903/975x546 975w, https://usercontents-c.styleshare.io/images/21126903/1024x573 1024w, https://usercontents-c.styleshare.io/images/21126903/1280x717 1280w, https://usercontents-c.styleshare.io/images/21126903/1320x739 1320w, https://usercontents-c.styleshare.io/images/21126903/1336x748 1336w, https://usercontents-c.styleshare.io/images/21126903/1480x829 1480w, https://usercontents-c.styleshare.io/images/21126903/1600x896 1600w"
                  alt=""
                  sizes="214px"
                  // srcset="https://usercontents-c.styleshare.io/images/21126903/200x112 200w, https://usercontents-c.styleshare.io/images/21126903/320x179 320w, https://usercontents-c.styleshare.io/images/21126903/480x269 480w, https://usercontents-c.styleshare.io/images/21126903/750x420 750w, https://usercontents-c.styleshare.io/images/21126903/975x546 975w, https://usercontents-c.styleshare.io/images/21126903/1024x573 1024w, https://usercontents-c.styleshare.io/images/21126903/1280x717 1280w, https://usercontents-c.styleshare.io/images/21126903/1320x739 1320w, https://usercontents-c.styleshare.io/images/21126903/1336x748 1336w, https://usercontents-c.styleshare.io/images/21126903/1480x829 1480w, https://usercontents-c.styleshare.io/images/21126903/1600x896 1600w"
                  src={this.props.url}
                  // className="brand_photo_size"
                />
              </div>
              <div className="count_and_arrow_btn">
                <span className="how_many_product">4720</span>
                <img
                  src="https://image.flaticon.com/icons/svg/748/748073.svg"
                  alt=""
                  className="arrow_right_size"
                />
              </div>
            </div>
          </a>
        </div>
        {/* </a> */}
      </div>
    );
  }
}

export default BrandBox;
