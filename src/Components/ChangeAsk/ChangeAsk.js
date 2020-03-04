import React, { Component } from "react";
import "./ChangeAsk.scss";

class ChangeAsk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeRefund: false,
      askQuestion: false
    };
  }
  handleAskQuestion = () => {
    this.setState({ askQuestion: !this.state.askQuestion });
  };

  handleChangeRefund = () => {
    this.setState({ changeRefund: !this.state.changeRefund });
  };

  render() {
    return (
      <>
        <div classname="detail_mold">
          {/* 전체 틀 */}
          <div className="detail_inside_mold">
            {/* *******그림 포함하는 버튼 3개 만들 수 있것******** */}
            <div
              className="btn_of_detail_product"
              onClick={this.handleAskQuestion}
            >
              <div className="text_of_detail_btn">상품 문의 10</div>
              <img
                src="https://image.flaticon.com/icons/svg/625/625946.svg"
                alt=""
                className="see_more_detail_arrow"
                className={
                  this.state.askQuestion
                    ? "change_refund_arrow_up"
                    : "change_refund_arrow_down "
                }
              />
            </div>
            <div
              className={
                this.state.askQuestion
                  ? "fold_ask_question"
                  : "open_ask_question"
              }
            >
              <div className="question_btn_parent">
                <a
                  href="https://open.kakao.com/o/sS0JQDZb"
                  target="_blank"
                  className="go_leave_question"
                >
                  <button className="question_btn">문의 작성하기</button>
                </a>
              </div>
              {/* 문의 하나하나 시작**************** */}
              <div className="question_box">
                <div className="question_id_date">p902***** 2020. 3. 1</div>
                <div className="question_text">
                  회색 L 언제 입고 되나욤 ㅠㅜㅠㅜㅜ
                </div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">whtnw***** 2020. 3. 1</div>
                <div className="question_text add_border_top">
                  후드집업 블랙 회색 ✨언제✨ 재입고 되나요?
                </div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">cjy**** 2020. 3. 1</div>
                <div className="question_text">재입고 언제되나요ㅠㅠㅠㅠ</div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">clar***** 2020. 3. 1</div>
                <div className="question_text">블랙 재입고 언제돼여 ㅠ</div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">jidy**** 2020. 3. 1</div>
                <div className="question_text">
                  1 재입고여 제발 ㅠㅠㅠㅠㅠㅠ
                </div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">minseo****** 2020. 3. 1</div>
                <div className="question_text">
                  블랙 제입거해주세요 ㅠㅠㅠㅠ 제발
                </div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">jell**** 2020. 3. 1</div>
                <div className="question_text">재입고 언제 되는거에요ㅜㅜ</div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">kt07**** 2020. 3. 1</div>
                <div className="question_text">재입고 언제 되나요?</div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">hce*** 2020. 3. 1</div>
                <div className="question_text">재입고 언제되나요ㅠㅠㅠㅠ</div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">jichc***** 2020. 3. 1</div>
                <div className="question_text">정품인가요??</div>
              </div>
              {/* **************** */}
              <div className="question_box add_border_top">
                <div className="question_id_date">p902***** 2020. 3. 1</div>
                <div className="question_text">
                  회색 L 언제 입고 되나욤 ㅠㅜㅠㅜㅜ
                </div>
              </div>
              {/* **************** */}
            </div>
          </div>
        </div>
        {/* *************************************************************** */}
        <div classname="detail_mold">
          {/* 전체 틀 */}
          <div className="detail_inside_mold">
            {/* *******그림 포함하는 버튼 3개 만들 수 있것******** */}
            <div
              className="btn_of_detail_product"
              onClick={this.handleChangeRefund}
            >
              <div className="text_of_detail_btn">배송 교환 환불</div>
              <img
                src="https://image.flaticon.com/icons/svg/625/625946.svg"
                alt=""
                // className="see_more_detail_arrow"
                className={
                  this.state.changeRefund
                    ? "change_refund_arrow_up"
                    : "change_refund_arrow_down "
                }
              />
            </div>
            <div
              // className="delivery_change_info"
              className={
                this.state.changeRefund
                  ? "fold_delivery_change_info"
                  : "delivery_change_info"
              }
            >
              <div className="give_padding_for_change">
                {/* ****************배송 정보 시작************************************* */}
                <div className="margin_delivery_info">
                  <h6 className="delivery_title">배송 정보</h6>
                  <ul className="basic_delivery-info_parent">
                    <li className="basic_delivery_text">
                      브랜드 및 제품에 따라 입점 업체 배송과 스타일쉐어 자체
                      배송으로 나뉩니다.
                    </li>
                    <li className="basic_delivery_text">
                      입점 업체 배송의 경우 업체마다 개별 배송비가 부여됩니다.
                    </li>
                    <li className="basic_delivery_text">
                      결제완료 후 약 1~3일 후 출고됩니다.
                    </li>
                    <li className="basic_delivery_text">
                      제주도를 포함한 도서산간 지역은 추가 배송일과 추가 배송비
                      입금요청이 있을 수 있습니다.
                    </li>
                  </ul>
                </div>
                {/* **********************교환, 환불, as 안내 시작****************** */}
                <div className="change_refund_as_info">
                  <h6 className="chan_refun_as_title">교환/환불/AS안내/기타</h6>
                  <ul className="basic_delivery-info_parent">
                    <li className="basic_delivery_text">
                      교환, 환불 및 기타문의는 스타일쉐어 고객센터 1833-8879으로
                      문의주셔야 합니다.
                    </li>
                    <li className="basic_delivery_text">
                      단순변심으로 인한 교환/환불인 경우 반송비를 입금해주셔야
                      합니다.
                    </li>
                    <li className="basic_delivery_text">
                      상품 불량인 경우는 배송비를 포함한 전액이 환불됩니다.
                    </li>
                    <li className="basic_delivery_text">
                      교환/환불시 입점업체 상품의 경우 각 업체에 따라 반송비용이
                      다를 수 있습니다.
                    </li>
                    <li className="basic_delivery_text">
                      상품 수령일로부터 7일 이내 반품/환불 접수 가능합니다.
                    </li>
                    <li className="basic_delivery_text">
                      단순변심 반품의 경우 제품 및 포장 상태가 재판매 가능하여야
                      합니다.
                    </li>
                    <li className="basic_delivery_text">
                      출고 이후 환불요청 시 상품 회수 후 처리됩니다.
                    </li>
                    <li className="basic_delivery_text">
                      화면상의 사진과 제품의 색상은 개인 환경에 따라 다소 차이가
                      있을 수 있으며 미세한 색상, 주름등의 차이는 제품 이상으로
                      인한 반품 사유가 되지 않습니다.
                    </li>
                    <li className="basic_delivery_text">
                      (주)위타일쉐어는 통신판매중개자이며 통신판매의 당사자가
                      아닙니다. 따라서 (주)위타일쉐어는 상품·거래정보 및 거래에
                      대하여 책임을 지지 않습니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ChangeAsk;
