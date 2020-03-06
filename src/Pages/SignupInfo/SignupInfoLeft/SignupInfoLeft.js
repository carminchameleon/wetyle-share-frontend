// import React from "react";
// import man from "../../../Img/man.png";
// import woman from "../../../Img/woman.png";
// // import src from "*.bmp";
// import "./SignupInfoLeft.scss";
// // import SignupInfoRight from "../SignupInfoRight/SignupInfoRight";

// class SignupInfoLeft extends React.Component {
//   state = {
//     visible: false
//   };
//   handlePost = () => {
//     const formData = new FormData();
//     formData.append("filename", this.state.collection_file);

//     fetch(`http://10.58.2.111:8000/card/upload/image`, {
//       method: "POST",
//       headers: {
//         Authorization:
//           "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Impvbmd0a2ZrZCJ9.TburqDu3-81bWqGKbRutBcqHADIB955vipm-oJbRbu4"
//       },
//       body: formData
//     })
//       .then(res => res.json())
//       .then(res =>
//         this.setState({
//           resultList: this.state.resultList.concat(res.image_url_list)
//         })
//       )
//       .then(res => console.log(res));
//   };
//   render() {
//     console.log(man);
//     return (
//       <div className="signup_info_left">
//         <div className="info_left_wrapper">
//           <div className="info_left_pic">
//             {this.props.genderCheck === true ? (
//               <img src={man} />
//             ) : (
//               <img src={woman} />
//             )}

//             {/* <img
//               className={
//                 this.props.genderSelector ? (src = { man }) : (src = { woman })
//               }
//             ></img> */}
//           </div>
//           <button
//             className="pic_selector"
//             style={{
//               backgroundColor: this.state.visible ? "#ebebeb" : "white"
//             }}
//             onClick={() => {
//               this.setState({ visible: !this.state.visible });
//             }}
//           >
//             사진선택
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignupInfoLeft;
