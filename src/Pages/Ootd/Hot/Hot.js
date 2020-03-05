import React, { Component } from "react";

import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./Hot.scss";

class Hot extends Component {
  state = {
    hotCard: []
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll, true);
    this.getCardList();
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.infiniteScroll);
  };
  getCardList = () => {
    fetch("http://52.78.11.154:8000/card/popular")
      .then(res => res.json())
      .then(res => {
        this.setState({
          hotCard: res.card_list,
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
      // this.getCardList();
    }
  };

  render() {
    return (
      <div className="OOTD_wrapper">
        <OotdTop />
        <div className="hot_wrapper">
          <TrendCard data={this.state.hotCard} />
          <OotdFooter />
        </div>
        <UploadIcon />
      </div>
    );
  }
}

export default Hot;
