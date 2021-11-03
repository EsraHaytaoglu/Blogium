import { api } from "../api";
import React, { useEffect, useState } from "react";
import "../css/PostDetail.css";
import Comments from "./Comments";
import { Link, useHistory, useParams } from "react-router-dom";
import "../css/Modal.css"
import DeleteModal from "./DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPost } from "../actions";


const PostDetail = () => {
  const { id } = useParams();
   const postDetail = useSelector(state => state.postDetail)
  const [show, setShow] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch()


  const handleCommentSubmit = (event,comment) => {
    event.preventDefault();
   dispatch(addComment(id, comment))
  };

  useEffect(() => {
    dispatch(getPost(id))
  }, []);
  return (
    <React.Fragment>
    <DeleteModal show={show} setShow={setShow} post={postDetail}  />
    <div className="container mt-5">
      <div className="d-flex justify-content-center row" >
        <div className="col-md-8">
          <div className="d-flex flex-column comment-section " >
            <div className="sketchy">
            <div className=" p-2 " >
              <div className="d-flex flex-row user-info" >
                <img
                  className="rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  width="40"
                />
                <div className="d-flex flex-column justify-content-start ml-2">
                  <span className="d-block font-weight-bold name" >
                    {postDetail.title}
                  </span>
                  <span className="date text-black-50">
                    Shared publicly - {postDetail.created_at}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="comment-text">{postDetail.content}</p>
              </div>
            </div>
            <div >
              <div className="d-flex flex-row fs-12">
                <div className="like p-2 cursor">
                <i className="bi bi-pencil-square"></i>
                <Link to={`/posts/${postDetail.id}/edit`} >
                  <button className="ml-1 buton">Edit</button></Link>
                </div>
                <div className="like p-2 cursor">
                <i className="bi bi-archive-fill"></i>
                  <button className="ml-1 buton " onClick={() => setShow(true)} >Delete</button>
                </div>
              </div>
            </div>
            </div>
            <Comments comments={postDetail.comments}  post={postDetail} handleSubmit={handleCommentSubmit} />
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default PostDetail;
