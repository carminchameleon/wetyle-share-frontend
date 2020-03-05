import React from "react";

import CardModal from "../Modal/CardModal/CardModal";

import "./TrendCard.scss";

document.title = "스타일쉐어";
class TrendCard extends React.Component {
  state = {
    isModalOpen: false,
    datas: [],
    select: "",
    modal: false,
    showModal: false
  };

  handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    document.body.style.overflow = "visible";
    this.setState({ showModal: false });
  };
  marOfCard = data => {
    return data.map((ele, idx) => (
      <div key={idx} id={ele.style_id} onClick={this.handleOpenModal}>
        <div className="trend_item">
          <div className="trend_item_img_wrapper">
            {ele.style_image_url.length >= 2 ? (
              <div className="more_img"></div>
            ) : (
              ""
            )}
            <img
              className="trend_item_img"
              src={ele.style_image_url[0].image_url}
              alt="main_img"
              onMouseOver={() => {
                this.setState({
                  select: `${idx} img_hover`
                });
              }}
              onMouseOut={() => {
                this.setState({
                  select: null
                });
              }}
            />
            {this.state.select === `${idx} img_hover` ? (
              <div className={`${idx} img_hover`}>
                <div className="like"></div>
                <div className="comment"></div>
                <div className="share"></div>
                <div className="more"></div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div style={{ width: "100%" }}>
            <div className="trend_information">
              <img
                className="user_icon"
                src={ele.profile_image_url}
                alt="user_icon"
              />
              <div className="comment_box">
                <div className="comment_top">
                  <div className="comment_nick">{ele.nickname}</div>
                  <div className="comment_date">{ele.date}</div>
                </div>
                <div className="comment_main">
                  {ele.profile_description}
                  <a style={{ cursor: "pointer" }}>...더보기</a>
                </div>
                <div className="icon_box">
                  <div>
                    <span className="like_icon"></span>
                    <span>{ele.like_count}</span>
                  </div>
                  <div>
                    <span className="ballon_icon"></span>
                    <span>{ele.comment_count}</span>
                  </div>
                  <div>
                    <span className="share_icon"></span>
                    <span>15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ohter_group">
              {ele.comment[0] ? (
                <div className="other_user">
                  <img
                    className="user_icon"
                    src={ele.comment[0].profile_image}
                    alt="icon"
                  />
                  <div>
                    <a>{ele.comment[0].nickname}</a>
                    {ele.comment[0].description}
                  </div>
                </div>
              ) : (
                ""
              )}
              {ele.comment[1] ? (
                <div className="other_user">
                  <img
                    className="user_icon"
                    src={ele.comment[1].profile_image}
                    alt="icon"
                  />
                  <div>
                    <a>{ele.comment[1].nickname}</a>
                    {ele.comment[1].description}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <CardModal
          showModal={this.state.showModal}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
        />
        <div className="trend_card_wrapper">
          <div className="trend_wrapper">
            <p className="trend_title">지금의 트렌드</p>
            <div className="trend_body">
              {/* {this.marOfTrend(this.state.datas)} */}
              {this.marOfCard(this.props.data)}
            </div>
          </div>

          {this.state.scrolling ? (
            <div className="loading_more">
              <img
                alt="loading"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///4CAgODg4KCgoICAgLCwsMDAwMjIyCH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default TrendCard;
