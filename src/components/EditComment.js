// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function EditComment(props) {
//   console.log(props);
//   const [post, setPost] = useState({
//     title: "",
//     content: "",
//   });
//   const [hata, sethata] = useState("");
//   const onInputChange = (event) => {
//     setPost({ ...post, [event.target.name]: event.target.value });
//   };

//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     sethata("");
//     // api()
//     //   .put(`/posts/${props.match.params.id}`, post)
//     //   .then((res) => {
//     //     console.log(res);
//     //     props.history.push(`/posts/${props.match.params.id}`);
//     //   })
//     //   .catch((error) => {
//     //     sethata("Title and content required.");
//     //   });
//   };
//   return (
//     <div>
//       <div>
//         {hata && (
//           <div>
//             <div
//               className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
//               role="alert"
//               data-brk-library="component__alert"
//             >
//               <i className="start-icon fa fa-times danger "></i>
//               <strong className="font__weight-semibold">Oh snap!</strong> {hata}
//             </div>
//           </div>
//         )}

//         <form
//           className="form-block"
//           onSubmit={(event) => {
//             onFormSubmit(event, post);
//           }}
//         >
//           <div className="row">
//             <div className="col-xs-12 col-sm-12">
//               <div className="form-group fl_icon">
//                 <div className="icon">
//                   <i className="fa fa-user"></i>
//                 </div>
//                 <input
//                   className="form-input"
//                   type="text"
//                   name="display_name"
//                   // onChange={handleOnChange}
//                   // value={commentBody.display_name}
//                   placeholder="Your name"
//                 />
//               </div>
//             </div>
//             <div className="col-xs-12 col-sm-12">
//               <div className="form-group">
//                 <textarea
//                   className="form-input"
//                   // onChange={handleOnChange}
//                   // name="body"
//                   // value={commentBody.body}
//                   placeholder="Your comment"
//                 ></textarea>
//               </div>
//             </div>
//             <button className="ml-3 btn btn-primary pull-right" type="submit">
//               submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditComment;
