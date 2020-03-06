import React from "react";
import { withRouter } from "react-router-dom";
import { SERVER_URL } from "config";
import CardModal from "../Modal/CardModal/CardModal";

import "./TrendCard.scss";

document.title = "스타일쉐어";
class TrendCard extends React.Component {
  state = {
    isModalOpen: false,
    select: "",
    modal: false,
    showModal: false,
    cardData: [],
    colletionData: [],
    scrolling: true,
    commentList: [],
    like: null,
    related_item: []
  };
  getCommentList = () => {
    const cardId = this.props.location.search.split("=")[1];
    fetch(`http://10.58.1.114:8000/card/style/comment/${cardId}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          commentList: res.comment
        })
      );
  };
  getLikeReset = () => {
    const cardId = this.props.location.search.split("=")[1];
    fetch(`http://10.58.1.114:8000/card/style/${cardId}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardData: res.result
        });
      });
  };
  getCardInfo = async id => {
    await this.props.history.push(`?card=${id}`);
    const cardId = this.props.location.search.split("=")[1];
    fetch(`http://10.58.1.114:8000/card/style/comment/${cardId}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          commentList: res.comment
        })
      );
    fetch(`http://10.58.1.114:8000/card/style/${cardId}`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Ilx1Yzc3NFx1Yzg4NVx1YmJmY19pZCJ9.RMSp0p5meKl6Pn81hwkAMb2cucMJ1fPLmB-DtqdI5Kk"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardData: res.result,
          colletionData: res,
          like: res.result.is_like,
          related_item: res.result.related_item
        });
      })
      .then(() => {
        this.handleOpenModal();
      });
  };

  handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    document.body.style.overflow = "visible";
    this.setState({ showModal: false });
    this.props.history.goBack();
  };
  marOfCard = data => {
    return data.map((ele, idx) => (
      <div
        className="trend_item"
        key={idx}
        id={ele.style_id}
        onClick={() => {
          this.getCardInfo(ele && ele.style_id);
        }}
      >
        <div className="trend_item_img_wrapper">
          {ele.style_image_url.length >= 2 ? (
            <div className="more_img"></div>
          ) : (
            ""
          )}

          <img
            className="trend_item_img"
            src={ele.style_image_url[0] && ele.style_image_url[0].image_url}
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
        {ele.related_item[0] && (
          <div className="related_item">
            {ele.related_item[0].etc && (
              <div className="item_ele">
                <span className="top_icon" />
                <div className="item_desc">
                  <div className="desc_title">Top</div>
                  <div className="desc_content">{ele.related_item[0].etc}</div>
                </div>
              </div>
            )}
            {ele.related_item[0].skirt && (
              <div className="item_ele">
                <span className="outer_icon" />
                <div className="item_desc">
                  <div className="desc_title">Outer</div>
                  <div className="desc_content">
                    {ele.related_item[0].skirt}
                  </div>
                </div>
              </div>
            )}
            {ele.related_item[0].pants && (
              <div className="item_ele">
                <span className="bottom_icon" />
                <div className="item_desc">
                  <div className="desc_title">Pants</div>
                  <div className="desc_content">
                    {ele.related_item[0].pants}
                  </div>
                </div>
              </div>
            )}
            {ele.related_item[0].shoes && (
              <div className="item_ele">
                <span className="shoes_icon" />
                <div className="item_desc">
                  <div className="desc_title">Shoes</div>
                  <div className="desc_content">
                    {ele.related_item[0].shoes}
                  </div>
                </div>
              </div>
            )}
            {ele.related_item[0].bag && (
              <div className="item_ele">
                <span className="bag_icon" />
                <div className="item_desc">
                  <div className="desc_title">bag</div>
                  <div className="desc_content">{ele.related_item[0].bag}</div>
                </div>
              </div>
            )}
            {ele.related_item[0].accessory && (
              <div className="item_ele">
                <span className="accessory_icon" />
                <div className="item_desc">
                  <div className="desc_title">Accessory</div>
                  <div className="desc_content">
                    {ele.related_item[0].accessory}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="trend_information_wrapper">
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
                <div className="other_info">
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
                <div className="other_info">
                  <a>{ele.comment[1].nickname}</a>
                  <span>{ele.comment[1].description}</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    ));
  };
  getCommentList = () => {
    const cardId = this.props.location.search.split("=")[1];
    fetch(`http://10.58.1.114:8000/card/style/comment/${cardId}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          commentList: res.comment
        })
      );
  };
  render() {
    return (
      <div>
        <CardModal
          showModal={this.state.showModal}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          cardInfo={this.state.cardData}
          colletionData={this.state.colletionData}
          getCardInfo={this.getCardInfo}
          commentList={this.state.commentList}
          getCommentList={this.getCommentList}
          getLikeReset={this.getLikeReset}
          like={this.state.like}
          relateditem={this.state.related_item}
        />
        <div className="trend_card_wrapper">
          <div className="trend_wrapper">
            <p className="trend_title">지금의 트렌드</p>
            <div className="trend_body">{this.marOfCard(this.props.data)}</div>
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

export default withRouter(TrendCard);
