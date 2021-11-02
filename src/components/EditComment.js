// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { api } from "../api";

// function EditComment(props) {

//     const [comment, setComment] = useState({
//         display_name: "",
//         body:"",
//     })
//     const handleOnChange = (event) => {
//         setComment({ ...comment, [event.target.name]: event.target.value });
//       };
    
//     const {post_id , id } = props.match.params
//     useEffect(() => {
//         api()
//             .put(`/posts/${post_id}/comments/${id}`, comment)
//             .then((res)=> {
//                 console.log(res);
//                 props.history.push(`/posts/${post_id}`);
//              })
//              .catch((error) => {
//                 console.log(error);
//             });
//     }, [])

 
//   return (
//     <div>
//       <div>
//         {/* {hata && (
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
//         )} */}

//         <form
//           className="form-block"
          
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
//                   onChange={handleOnChange}
//                   placeholder="Your name"
//                 />
//               </div>
//             </div>
//             <div className="col-xs-12 col-sm-12">
//               <div className="form-group">
//                 <textarea
//                   className="form-input"
//                   onChange={handleOnChange}
//                   name="body"
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
