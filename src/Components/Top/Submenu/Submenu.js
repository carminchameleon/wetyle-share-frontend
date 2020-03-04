import React, { Component } from "react";
import "./Submenu.scss";

class Submenu extends Component {
  render() {
    if (this.props.mode === "unisex")
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>티셔츠</span>
            </li>
            <li>
              <span>후드/집업/맨투맨</span>
            </li>
            <li>
              <span>셔츠</span>
            </li>
            <li>
              <span>니트/가디건</span>
            </li>
            <li>
              <span>아우터</span>
            </li>
            <li>
              <span>팬츠</span>
            </li>
            <li>
              <span>스포츠</span>
            </li>
            <li>
              <span>언더웨어</span>
            </li>
            <li>
              <span>프리미엄 브랜드</span>
            </li>
          </ul>
        </nav>
      );
    else if (this.props.mode === "woman") {
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>티셔츠</span>
            </li>
            <li>
              <span>후드/집업/맨투맨</span>
            </li>
            <li>
              <span>셔츠/블라우스</span>
            </li>
            <li>
              <span>니트/가디건</span>
            </li>
            <li>
              <span>아우터</span>
            </li>
            <li>
              <span>팬츠</span>
            </li>
            <li>
              <span>스커트</span>
            </li>
            <li>
              <span>원피스</span>
            </li>
            <li>
              <span>스포츠</span>
            </li>
            <li>
              <span>언더웨어</span>
            </li>
            <li>
              <span>프리미엄 브랜드</span>
            </li>
          </ul>
        </nav>
      );
    } else if (this.props.mode === "beauty") {
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>스킨케어</span>
            </li>
            <li>
              <span>메이크업</span>
            </li>
            <li>
              <span>클렌징</span>
            </li>
            <li>
              <span>바디케어</span>
            </li>
            <li>
              <span>헤어케어</span>
            </li>
            <li>
              <span>남성화장품</span>
            </li>
            <li>
              <span>향수/디퓨저/캔들</span>
            </li>
            <li>
              <span>뷰티소품</span>
            </li>
            <li>
              <span>헤어/바디/미용기기</span>
            </li>
            <li>
              <span>글로벌 브랜드</span>
            </li>
            <li>
              <span>프리미엄 브랜드</span>
            </li>
          </ul>
        </nav>
      );
    } else if (this.props.mode === "bag") {
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>가방</span>
            </li>
            <li>
              <span>지갑/파우치</span>
            </li>
            <li>
              <span>시계</span>
            </li>
            <li>
              <span>모자</span>
            </li>
            <li>
              <span>안경/선글라스</span>
            </li>
            <li>
              <span>장갑/목도리/귀도리</span>
            </li>
            <li>
              <span>쥬얼리</span>
            </li>
            <li>
              <span>기타소품</span>
            </li>
            <li>
              <span>양말/스타킹</span>
            </li>
            <li>
              <span>프리미엄 브랜드</span>
            </li>
          </ul>
        </nav>
      );
    } else if (this.props.mode === "shoes") {
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>스니커즈</span>
            </li>
            <li>
              <span>구두</span>
            </li>
            <li>
              <span>샌들</span>
            </li>
            <li>
              <span>부츠</span>
            </li>
            <li>
              <span>슈케어/액세서리</span>
            </li>
            <li>
              <span>남성슈즈</span>
            </li>
            <li>
              <span>프리미엄 브랜드</span>
            </li>
          </ul>
        </nav>
      );
    } else if (this.props.mode === "life") {
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>인테리어</span>
            </li>
            <li>
              <span>가구/수납</span>
            </li>
            <li>
              <span>리빙소품</span>
            </li>
            <li>
              <span>패브릭</span>
            </li>
            <li>
              <span>키친</span>
            </li>
            <li>
              <span>시즌/이벤트</span>
            </li>
            <li>
              <span>디자인 문구</span>
            </li>
          </ul>
        </nav>
      );
    } else if (this.props.mode === "tech") {
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>휴대폰 액세서리</span>
            </li>
            <li>
              <span>계절가전</span>
            </li>
            <li>
              <span>생활가전</span>
            </li>
            <li>
              <span>건강가전</span>
            </li>
            <li>
              <span>음향기기</span>
            </li>
            <li>
              <span>카메라</span>
            </li>
            <li>
              <span>PC 주변기기</span>
            </li>
          </ul>
        </nav>
      );
    } else if (this.props.mode === "health") {
      return (
        <nav className="nav_submenu">
          <ul
            className="nav_submenu_item"
            onMouseLeave={this.props.handleLeave}
          >
            <li>
              <span>다이어트 식품</span>
            </li>
            <li>
              <span>홈트레이닝</span>
            </li>
            <li>
              <span>건강식품</span>
            </li>
            <li>
              <span>일반식품</span>
            </li>
            <li>
              <span>덴탈케어</span>
            </li>
            <li>
              <span>여성용품</span>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Submenu;
