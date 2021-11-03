import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { api } from "../api";
import "../css/Modal.css";
import { deletePost } from "../actions"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function DeleteModal(props) {
   const  {show, setShow, post } = props;
   const error = useSelector(state => state.deletePostError)
   const { push } = useHistory();

   const dispatch = useDispatch()

   const handleDelete =  (id) => {
    dispatch(deletePost(post.id, setShow, push))
   }
  return (
    <React.Fragment>
      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {post.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?
            {error && {error}}
             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShow(false) }>
            No
          </Button>
          <Button variant="primary" onClick={()=> handleDelete(post.id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteModal;
