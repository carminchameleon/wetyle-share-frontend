import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import DaliyLookHeader from "./DaliyLookHeader/DaliyLookHeader";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";
import { SERVER_URL } from "config";

import "./DailyLook.scss";

class DailyLook extends Component {
  state = {
    other: [],
    cardList: [],
    scrolling: true,
    items: 25,
    preItems: 0,
    topThree: [],
    otherCard: [],
    like_check: null
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll, true);
    this.getTopItem();
    this.getCardList();
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.infiniteScroll);
  };
  getTopItem = () => {
    fetch(`${SERVER_URL}/card/dailylook/collection`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          topThree: res.collection_list.slice(0, 3),
          otherCard: res.collection_list.slice(3),
          like_check: res.collection_list[1].is_following,
          like_check1: res.collection_list[2].is_following
        })
      );
  };
  getCardList = () => {
    fetch(`${SERVER_URL}/card/dailylook`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardList: this.state.cardList.concat(
            res.card_list.slice(this.state.preItems, this.state.items)
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
    if (scrollTop + clientHeight + 1 > scroolHeight) {
      this.setState({
        scrolling: !this.state.scrolling,
        preItems: this.state.items,
        items: this.state.items + 25
      });
      this.getCardList();
    }
  };

  render() {
    return (
      <div className="daily_wrapper">
        <OotdTop />
        <DaliyLookHeader
          topItem={this.state.topThree}
          otherCard={this.state.otherCard}
          getTopItem={this.getTopItem}
          like_check={this.state.like_check}
          like_check1={this.state.like_check1}
        />
        <TrendCard data={this.state.cardList} />
        <OotdFooter />
        <UploadIcon />
      </div>
    );
  }
}

export default DailyLook;
