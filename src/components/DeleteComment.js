import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { api } from "../api";
import "../css/Modal.css";
import { deleteComment, deletePost } from "../actions"
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function DeleteComment(props) {
    const [show, setShow] = useState(true);
   
   const error = useSelector(state => state.deletePostError)
   const { push } = useHistory();

   const dispatch = useDispatch();
   const { post_id ,id} =useParams();

   const handleDelete =  (id) => {
    dispatch(deleteComment(id, post_id , push))
   }
   const goBack = () => {
     push(`/posts/${post_id}`)
   }
  return (
    <React.Fragment>
      <Modal
        size="sm"
        show={show}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this comment?
            {/* {error && {error}} */}
             </Modal.Body>
        <Modal.Footer>
        {/* onClick={()=> setShow(false) } */}
          <Button variant="secondary" onClick={goBack}>
            No
          </Button>
          
          <Button variant="primary" onClick={()=> handleDelete(id)} >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteComment;
