import React, { useState } from "react";

function CommentList(props) {
  return (
    <React.Fragment>
      <h1 className="comments-title">Comments ({props.comments.length})</h1>
      {props.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div className="be-comment">
              <div className="be-img-comment">
                <a href="blog-detail-2.html">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    className="be-ava-comment"
                  />
                </a>
              </div>
              <div className="be-comment-content">
                <span className="be-comment-name">
                  <a href="blog-detail-2.html">{comment.display_name}</a>
                </span>
                <span className="be-comment-time">
                  <i className="fa fa-clock-o"></i>
                  {comment.created_at}
                </span>

                <p className="be-comment-text">{comment.body}

                {/* <button className="editBtn" onClick={handleEditComment(comment.id)}>
                <i className=" bi bi-pencil-square"></i>
                </button> */}

                </p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default CommentList;
