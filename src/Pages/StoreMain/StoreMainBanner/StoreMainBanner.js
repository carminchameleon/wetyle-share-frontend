// import React, { Component } from "react";

// // function SampleNextArrow(props) {
// //   const { className, style, onClick } = props;
// //   return (
// //     <div
// //       className={className}
// //       style={{ ...style, display: "block", background: "transparent" }}
// //       onClick={onClick}
// //     />
// //   );
// // }

// // function SamplePrevArrow(props) {
// //   const { className, style, onClick } = props;
// //   return (
// //     <div
// //       className={className}
// //       style={{ ...style, display: "block", background: "transparent" }}
// //       onClick={onClick}
// //     />
// //   );
// // }

// class StoreMainBanner extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: []
//     };
//   }

//   componentDidMount = () => {
//     fetch("http://localhost:3000/data/storemainbanner.json")
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data: res.data
//         });
//       });
//   };

//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slideToShow: 1,
//       autoplay: true,
//       slidesToScroll: 1,
//       speed: 1000,
//       lazyLoad: true,
//       autoPlaySpeed: 1000
//       // nextArrow: <SampleNextArrow />,
//       // prevArrow: <SamplePrevArrow />
//       // cssEase: "linear"
//     };

//     return (
//       <div className="StoreMainBanner">
//         <Slider {...settings}>
//           {this.state.data.map(el => {
//             return (
//               <StoreMainBannerCore
//                 key={el.id}
//                 data={el}
//                 webDestination={el.webDestination}
//                 subText={el.subText}
//                 text={el.text}
//                 imageId={el.imageId}
//               />
//             );
//           })}
//           {/* <StoreMainBannerCore data={this.state.data} /> */}
//         </Slider>
//         <div className="arrow_container">
//           <div className="left_box">
//             <img
//               className="arrow_button"
//               src="https://image.flaticon.com/icons/svg/126/126492.svg"
//               alt="left_button"
//             ></img>
//           </div>
//           {/* <div className="center_empty"></div> */}
//           <div className="right_box">
//             <img
//               className="arrow_button"
//               src="https://image.flaticon.com/icons/svg/126/126490.svg"
//               alt="right_button"
//             ></img>
//           </div>
//         </div>
//         <button className="scroll_container">
//           <span className="ban_scroll_text">Scroll</span>
//           <div className="ban_scroll_circle">
//             <img
//               className="ban_scroll_button"
//               src="https://image.flaticon.com/icons/svg/2223/2223613.svg"
//               alt="scroll_button"
//             ></img>
//           </div>
//         </button>
//       </div>
//     );
//   }
// }

// export default StoreMainBanner;
