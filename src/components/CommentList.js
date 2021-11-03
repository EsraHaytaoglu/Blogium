import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { editComment } from "../actions";


function CommentList(props) {
  const [editCommentId, setEditCommentId] = useState(null)
  const { push }= useHistory();
  const handleEdit = (id) => {
    setEditCommentId(id);
  }
  
  const [comment, setComment] = useState({
    display_name: "",
    body: "",
  });
  const  post_id  = props.post.id

  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(editComment(post_id, editCommentId, comment))
    setEditCommentId(null)
}


  return (
    <React.Fragment>
      <h1 className="comments-title">Comments ({props.comments.length})</h1>
      {props.comments.map((comment) => {
        { if(editCommentId === comment.id) {
         return (
           <div>
           <h5>Edit Comment Form</h5>
          <form
          className="form-block"
          onSubmit={(event) => {
            onFormSubmit(event, comment);
            push(`/posts/${post_id}`)
          }}
          
        >
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="form-group fl_icon">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <input
                  className="form-input"
                  type="text"
                  name="display_name"
                  value={comment.display_name}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12">
              <div className="form-group">
                <textarea
                  className="form-input"
                  onChange={handleOnChange}
                  name="body"
                  type="text"
                  placeholder="Your comment"
                ></textarea>
              </div>
            </div>
            <button className="ml-3 btn btn-primary pull-right" type="submit" >
              submit
            </button>
          </div>
        </form>
        </div>
         )
        } else {
          return (
            <div key={comment.id}>
              <div className="be-comment  mb-2">
                <div className="be-img-comment ">
                  <span>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                      className="be-ava-comment"
                    />
                  </span>
                </div>
                <div className="be-comment-content  ">
                  <span className="be-comment-name">
                    <span>{comment.display_name}</span>
                  </span>
                  <span className="be-comment-time">
                    <i className="fa fa-clock-o"></i>
                    {comment.created_at}
                  </span>
              
                  <p className="be-comment-text sketch">{comment.body}
                  <button className="editBtn" onClick={() => handleEdit(comment.id)} >
                  <i className=" bi bi-pencil-square"></i>
                  </button>
  
                  <Link to={`/posts/${props.post.id}/comments/delete/${comment.id}`}>
                  <button  className="editBtn" >
                  <i className="bi bi-archive-fill"></i>
                  </button>
                  </Link>
  
                  </p>
                </div>
              </div>
            </div>
          );
        }}
     
      })}
    </React.Fragment>
  );
}

export default CommentList;
