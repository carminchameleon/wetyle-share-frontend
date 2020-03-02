import React from "react";

import CardModal from "../Modal/CardModal";

import "./TrendCard.scss";

document.title = "스타일쉐어";
class TrendCard extends React.Component {
  state = {
    isModalOpen: false,
    datas: [],
    items: 5,
    preItems: 0,
    scrolling: true,
    select: "",
    modal: false,
    original: []
  };

  componentDidMount = () => {
    this.getCardItems();
    this.getii();
    window.addEventListener("scroll", this.infiniteScroll, true);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.infiniteScroll);
  };
  getii = () => {
    fetch("http://10.58.3.251:8000/card/dailylook")
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .then(res => {
        this.setState({
          original: res.data
        });
      });
  };
  getCardItems = () => {
    fetch("http://localhost:3000/data/trendcard.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          datas: this.state.datas.concat(
            res.data.slice(this.state.preItems, this.state.items)
          ),
          scrolling: !this.state.scrolling
        });
      });
  };

  // 무한 스크롤 구현
  infiniteScroll = () => {
    let scroolHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight + 10 > scroolHeight) {
      this.setState({
        scrolling: !this.state.scrolling,
        preItems: this.state.items,
        items: this.state.items + 5
      });
      this.getCardItems();
    }
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  marOfTrend = data => {
    return data.map((ele, idx) => (
      <div key={idx} onClick={this.toggle}>
        <div className="trend_item">
          <div className="trend_item_img_wrapper">
            {ele.main_url ? <div className="more_img"></div> : ""}
            <img
              className="trend_item_img"
              src={ele.main_url}
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

          <div className="trend_information">
            <img
              className="user_icon"
              src={ele.user[0].user_icon}
              alt="user_icon"
            />
            <div className="comment_box">
              <div className="comment_top">
                <div className="comment_nick">{ele.user[0].user_nick}</div>
                <div className="comment_date">{ele.date}</div>
              </div>
              <div className="comment_main">
                {ele.user[0].user_comment.slice(0, 20)}
                <a style={{ cursor: "pointer" }}>...더보기</a>
              </div>
              <div className="icon_box">
                <div>
                  <span className="like_icon"></span>
                  <span>{ele.user[0].likes}</span>
                </div>
                <div>
                  <span className="ballon_icon"></span>
                  <span>{ele.user[0].balloon}</span>
                </div>
                <div>
                  <span className="share_icon"></span>
                  <span>{ele.user[0].share}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ohter_group">
            <div className="other_user">
              <img
                className="user_icon"
                src={ele.user[1].user_icon}
                alt="icon"
              />
              <div>
                <a>{ele.user[2].user_nick}</a>
                {ele.user[1].user_comment}
              </div>
            </div>
            <div className="other_user">
              <img
                className="user_icon"
                src={ele.user[2].user_icon}
                alt="icon"
              />
              <div>
                <a>{ele.user[2].user_nick}</a>
                {ele.user[2].user_comment}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <CardModal modal={this.state.modal} toggle={this.toggle} />
        <div className="trend_card_wrapper">
          <div className="trend_wrapper">
            <p className="trend_title">지금의 트렌드</p>
            <div className="trend_body">
              {this.marOfTrend(this.state.datas)}
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
