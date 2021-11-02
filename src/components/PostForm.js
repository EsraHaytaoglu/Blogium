import { api } from "../api";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../App.css"



const PostForm = (props) => {

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [hata, sethata] = useState("");
  const { id }= useParams();
  const history= useHistory();
  const onInputChange = (event) => {
       setPost({ ...post, [event.target.name]: event.target.value });
  };
  console.log("yazi formu porps", props);

  const onFormSubmit = (event) => {
    event.preventDefault();
    sethata("");
    if (props.post?.title) {
      api().put(`/posts/${id}`, post )
      .then((res)=> {
        console.log(res);
        history.push(`/posts/${id}`);
      })
      .catch((error) => {
        sethata("Title and content required.");
      });
    } else {
      api()
      .post("/posts", post)
      .then((response) => {
        console.log(response);
        props.history.push("/");
      })
      .catch((error) => {
        sethata("Title and content required.");
      });
    }
 
  };
  useEffect(() => {
    if(props.post.title && props.post.content) setPost(props.post)
  }, [props.post])

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

export default PostForm;
