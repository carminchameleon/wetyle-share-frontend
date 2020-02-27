<div className="ban_pic_wrapper">
          <a className="ban_pic_a" href="{this.props.web}">
            <picture className="ban_pic">
              <img
                className="ban_img"
                src={`https://usercontents-c.styleshare.io/images/${this.props.imageId}/1920x1080`}
                alt="bannerImage"
              ></img>
            </picture>
          </a>
        </div>
        //////////////////////////////////////////////////////
        <div className="ban_content_container">
          <div className="ban_content_text">
            <div className="ban_left_empty"></div>
            <div className="ban_right_box">
              <div className="ban_subtext_box">
                <p className="ban_subtext">{this.props.text}</p>
              </div>
              <div className="ban_text_box">
                <p className="ban_text">{this.props.subText}</p>
              </div>
            </div>
          </div>
          <div className="ban_content_line">
            <div className="ban_line_front"></div>
            <div className="ban_line_middle">
              <div className="ban_line_middle_inner">
                <div className="ban_line_middle_indicator">
                  <div className="ban_line_middle_bold"></div>
                </div>
              </div>
            </div>
            <div className="ban_line_back"></div>
          </div>
        </div>
