import React from "react";

import Modal from "../Modal";

import "./TrendCard.scss";
import Top from "../Top/Top";

document.title = "스타일쉐어";
class TrendCard extends React.Component {
  state = {
    isModalOpen: false,
    datas: [],
    items: 2,
    preItems: 0,
    scrolling: true,
    select: 0
  };

  componentDidMount = () => {
    this.getCardItems();
    window.addEventListener("scroll", this.infiniteScroll, true);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  // 무한 스크롤 아이템 받아오기
  // getItemsExample = () => {
  //   fetch("https://picsum.photos/list")
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         datas: this.state.datas.concat(
  //           res.slice(this.state.preItems, this.state.items)
  //         ),
  //         scrolling: !this.state.scrolling
  //       });
  //     });
  // };
  // 무한스크롤 데이터 예시
  // mapofExample = datas => {
  //   return datas.map((datas, idx) => <div key={idx}>{datas.author}</div>);
  // };
  // 모달 오픈 클로즈
  openModal = () => {
    document.getElementById("root").style.overflow = "hidden";
    document.getElementsByTagName("header")[0].style.zIndex = "0";
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    document.getElementById("root").style.overflow = "visible";
    document.getElementsByTagName("header")[0].style.zIndex = "5";
    this.setState({ isModalOpen: false });
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

  marOfTrend = data => {
    return data.map((ele, idx) => (
      <div key={idx} onClick={this.openModal}>
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
            <div>
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
      </div>
    ));
  };

  render() {
    return (
      <div className="trend_card_wrapper">
        <Top>
          <div className="mid">인기</div>
          <div className="mid">데일리룩</div>
          <div className="mid">뷰티</div>
          <div className="mid">최신</div>
          <div className="mid">QnA</div>
          <div className="mid">팔로잉</div>
        </Top>
        <Modal
          isOpen={this.state.isModalOpen}
          close={this.closeModal}
          data={this.state.datas}
        />

        <div className="trend_wrapper">
          <div>
            <p className="trend_title">지금의 트렌드</p>
          </div>
          <div className="trend_body">{this.marOfTrend(this.state.datas)}</div>
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
    );
  }
}

export default TrendCard;
