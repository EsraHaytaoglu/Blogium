import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/PostList.css";

function PostList() {
  const [yaziListesi, setYaziListesi] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setYaziListesi(response.data);
      });

  }, []);
  return (
    <div className="mt-3 ">
      {yaziListesi.map((yazi) => {
        return (
          <div className="card p-3 mb-2" key={yazi.id}>
            <div className="d-flex flex-row">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                height="40"
                width="40"
                className="rounded-circle mr-4"
              />
              <div className="d-flex flex-column ms-2">
                <Link to={`/posts/${yazi.id}`}>
                <h6 className="mb-1 text-primary">{yazi.title}</h6>
                {/* <p className="comment-text">{yazi.content}</p> */}
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row gap-3 align-items-center">
                <div className="d-flex align-items-center mr-2">
                  <i className="fa fa-heart-o"></i>
                  <span className="ms-1 fs-10 m-1">Like</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-comment-o"></i>
                  <span className="ms-1 fs-10 m-1">Comments</span>
                </div>
              </div>
              <div className="d-flex flex-row">
                <span className="text-muted fw-normal fs-10">
                  {yazi.created_at}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
