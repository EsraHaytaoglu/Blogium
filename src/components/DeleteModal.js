import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { api } from "../api";
import "../css/Modal.css";

function DeleteModal(props) {
   const  {show, setShow, post, push} = props;
   const [hata, sethata] = useState("")

   const handleDelete =  (id) => {
       api()
        .delete(`/posts/${id}`)
        .then(()=> {
            setShow(false);
            push("/")
        })
        .catch(()=> {
            sethata("An error occurred while deleting the post.")
        })
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
            {hata && {hata}}
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
