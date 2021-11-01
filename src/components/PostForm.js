import { api } from "../api";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../App.css"

const INITIAL_POST = {
  title: "",
  content: "",
};

const PostForm = (props) => {
  const [post, setPost] = useState(INITIAL_POST);
  const [hata, sethata] = useState("");
  const onInputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    sethata("");
    api()
      .post("/posts", post)
      .then((response) => {
        console.log(response);
        props.history.push("/");
      })
      .catch((error) => {
        sethata("Title and content required.");
      });
  };
  return (
    <React.Fragment>
    <div >
      {hata && (
        <div >
          <div
            className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
            role="alert"
            data-brk-library="component__alert"
          >
            <i className="start-icon fa fa-times danger "></i>
            <strong className="font__weight-semibold">Oh snap!</strong> {hata}
          </div>
        </div>
      )}
      <form
        className="form-block"
        onSubmit={(event) => {
          onFormSubmit(event, post);
          setPost(INITIAL_POST);
        }}
      >
           <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="title"
                value={post.title}
                onChange={onInputChange}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12">
            <div className="form-group">
              <textarea
                className="form-input"
                name="content"
                value={post.content}
                onChange={onInputChange}
                placeholder="content"
              ></textarea>
            </div>
          </div>
          <button className="btn btn-primary pull-right mr-2" type="submit">
            submit
          </button>
          <Link to="/">
            <button className="btn btn-primary pull-right" type="submit">
              back
            </button>
          </Link>
          </div>
      </form>
      </div>
    </React.Fragment>
  );
};

export default withRouter(PostForm);
