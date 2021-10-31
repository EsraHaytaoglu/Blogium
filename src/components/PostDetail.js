import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/PostDetail.css";
import Comments from "./Comments";


const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);


  const handleCommentSubmit = (event,commentBody) => {
    event.preventDefault();
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
        commentBody
      )
      .then((response) => {
        setComments([...comments, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
        axios.get(
          `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`
        ),
      ])
      .then((responses) => {
        setPostDetail(responses[0].data);
        setComments(responses[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="d-flex flex-column comment-section">
            <div className="bg-white p-2">
              <div className="d-flex flex-row user-info">
                <img
                  className="rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  width="40"
                />
                <div className="d-flex flex-column justify-content-start ml-2">
                  <span className="d-block font-weight-bold name">
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
            <div className="bg-white">
              <div className="d-flex flex-row fs-12">
                <div className="like p-2 cursor">
                  <i className="fa fa-thumbs-o-up"></i>
                  <span className="ml-1">Like</span>
                </div>
                <div className="like p-2 cursor">
                  <i className="fa fa-commenting-o"></i>
                  <span className="ml-1">Comment</span>
                </div>
              </div>
            </div>
            <Comments comments={comments} handleSubmit={handleCommentSubmit} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;