import React, { Component } from "react";
import { SERVER_URL } from "config";

import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./Hot.scss";

class Hot extends Component {
  state = {
    hotCard: [],
    scrolling: true,
    items: 5,
    preItems: 0
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll, true);
    this.getHotCard();
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.infiniteScroll);
  };

  getHotCard = () => {
    fetch(`${SERVER_URL}/card/popular`)

      .then(res => res.json())
      .then(res => {
        this.setState({
          hotCard: this.state.hotCard.concat(
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
        items: this.state.items + 5
      });
      this.getHotCard();
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
