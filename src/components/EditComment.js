import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { editComment } from "../actions";

function EditComment(props) {
    const [comment, setComment] = useState({
        display_name: "",
        body: "",
      });
      const {post_id , id } = useParams();

      const commentRedux = useSelector(state => state.postDetail.comments)
      const co = commentRedux.filter(comment=> comment.id === id)
      console.log(co);


    const history = useHistory();
    
    const handleOnChange = (event) => {
        setComment({ ...comment, [event.target.name]: event.target.value });
      };

    const dispatch = useDispatch()
    
   
     const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(editComment(post_id, id, comment))
    }
    

 
  return (
    <div>
      <div>
        <h1>Edit comment</h1>
        {/* {hata && (
          <div>
            <div
              className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
              role="alert"
              data-brk-library="component__alert"
            >
              <i className="start-icon fa fa-times danger "></i>
              <strong className="font__weight-semibold">Oh snap!</strong> {hata}
            </div>
          </div>
        )} */}

        <form
          className="form-block"
          onSubmit={(event) => {
            onFormSubmit(event, comment);
            history.push(`/posts/${id}`)
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
                  value={comment.body}
                  name="body"
                  placeholder="Your comment"
                ></textarea>
              </div>
            </div>
            <button className="ml-3 btn btn-primary pull-right" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditComment;
