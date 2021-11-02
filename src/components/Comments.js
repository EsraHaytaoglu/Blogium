import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function Comments(props) {
    
    return (
        <React.Fragment>
        <CommentList comments={props.comments}  post={props.post} />
        <CommentForm handleSubmit={props.handleSubmit} />
        </React.Fragment>
    )
}

export default Comments;
