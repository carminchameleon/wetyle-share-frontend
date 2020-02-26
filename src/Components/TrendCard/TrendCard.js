import React from "react";

import "./TrendCard.scss";
import Modal from "../Modal";

document.title = "스타일쉐어";
class TrendCard extends React.Component {
  state = {
    isModalOpen: false,
    datas: [],
    items: 50,
    preItems: 0,
    scrolling: true,

    data: [
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43771287/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      },
      {
        date: "20.02.23",
        main_url:
          "https://usercontents-c.styleshare.io/images/43768372/436x436",
        user: [
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "넘나블리",
            user_comment:
              "생각보다 여러분이 너무 좋아해주셔서 보정합니다 여러분들의 희망을 너무 좋아합니다  희망을 너무 좋아합니다  희망을 너무 좋아합니다",
            likes: "255",
            balloon: "20",
            share: "13"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "kanati",
            user_comment: "담아가요🔥"
          },
          {
            user_icon:
              "https://staticassets-a.styleshare.io/2239a240f7/img/profilepics/profile_140x140.png",
            user_nick: "asdsa2",
            user_comment: "정보좀요"
          }
        ]
      }
    ]
  };

  componentDidMount = () => {
    this.getItemsExample();
    window.addEventListener("scroll", this.infiniteScroll, true);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  // 아이템 받아오기
  getItemsExample = () => {
    fetch("https://picsum.photos/list")
      .then(res => res.json())
      .then(res => {
        this.setState({
          datas: this.state.datas.concat(
            res.slice(this.state.preItems, this.state.items)
          ),
          scrolling: !this.state.scrolling
        });
      });
  };

  // 무한 스크롤 구현
  infiniteScroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      this.setState({
        scrolling: !this.state.scrolling,
        preItems: this.state.items,
        items: this.state.items + 50
      });
      this.getItemsExample();
    }
  };

  marOfTrend = data => {
    return data.map((ele, idx) => (
      <div key={idx} onClick={this.openModal}>
        <div className="trend_item">
          <img className="trend_item_img" src={ele.main_url} alt="main_img" />
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
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  // mapofExample = datas => {
  //   return datas.map((datas, idx) => <div key={idx}>{datas.author}</div>);
  // };
  render() {
    return (
      <div className="hot_wrapper">
        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
        <header style={{ zIndex: "-1" }}>
          <ol>
            <li>인기</li>
            <li>데일리룩</li>
            <li>뷰티</li>
            <li>최신</li>
            <li>QnA</li>
            <li>팔로잉</li>
          </ol>
        </header>

        <div className="trend_wrapper">
          <div>
            <p className="trend_title">지금의 트렌드</p>
          </div>
          <div className="trend_body">{this.marOfTrend(this.state.data)}</div>
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
