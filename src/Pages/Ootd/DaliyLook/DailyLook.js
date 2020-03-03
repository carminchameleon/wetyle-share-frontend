import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import DaliyLookHeader from "./DaliyLookHeader/DaliyLookHeader";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./DailyLook.scss";

class DailyLook extends Component {
  state = {
    other: [],
    cardList: [],
    scrolling: true,
    items: 5,
    preItems: 0,
    topThree: [],
    otherCard: []
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
    fetch("http://10.58.3.251:8001/card/dailylook/collection/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          topThree: res.collection_list.slice(0, 3),
          otherCard: res.collection_list.slice(3)
        })
      );
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
      // this.getCardList();
    }
  };
  getCardList = () => {
    fetch("http://10.58.3.251:8001/card/dailylook/")
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

  render() {
    return (
      <div className="daily_wrapper">
        <OotdTop />
        <DaliyLookHeader
          topItem={this.state.topThree}
          otherCard={this.state.otherCard}
        />
        <TrendCard data={this.state.cardList} />
        <OotdFooter />
        <UploadIcon />
      </div>
    );
  }
}

export default DailyLook;
