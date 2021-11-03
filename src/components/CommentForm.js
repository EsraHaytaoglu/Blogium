import React, { useState } from 'react';


const COMMENT_INITIAL = {
    display_name: "",
    body: "",
  };

const CommentForm = (props) => {
    const [commentBody, setCommentBody] = useState(COMMENT_INITIAL);

    const handleOnChange = (event) => {
        setCommentBody({ ...commentBody, [event.target.name]: event.target.value });
      };
    return (
        <React.Fragment>
          <h5>ADD Comment form </h5>
            <div className=" p-2 ">
              <form className="form-block" onSubmit={(event) => {
                  props.handleSubmit(event, commentBody)
                  setCommentBody(COMMENT_INITIAL)}}>
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="form-group fl_icon ">
                      <div className="icon">
                        <i className="fa fa-user"></i>
                      </div>
                      <input
                        className="form-input "
                        type="text"
                        name="display_name"
                        onChange={handleOnChange}
                        value={commentBody.display_name}
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
                        value={commentBody.body}
                        placeholder="Your comment"
                      ></textarea>
                    </div>
                  </div>
                  <button className="myBtn mb-5 font" type="submit" >submit</button>
                </div>
              </form>
            </div>
        </React.Fragment>
    )
}

export default CommentForm
