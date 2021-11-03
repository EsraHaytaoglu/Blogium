import axios from "axios";
import { api } from "../api";

export const getPostList = () => (dispatch) => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({ type: "GET_POST_LIST", payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: "GET_POST_LIST_ERROR",
        payload: "Get post list error",
      });
    });
};
export const getPost = (id) => (dispatch) => {
  axios
    .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((responses) => {
      const payload = {
        ...responses[0].data,
        comments: responses[1].data,
      };
      dispatch({ type: "GET_POST", payload });
    })
    .catch((error) => {
      dispatch({
        type: "GET_POST_ERROR",
        payload: "Get post  error",
      });
    });
};
export const editPost = (id, post, push) => (dispatch) => {
  api().put(`/posts/${id}`, post )
  .then((response)=> {
    dispatch({ type: "EDIT_POST", payload:response.data})
    push(`/posts/${id}`);
  })
  .catch((error) => {
    dispatch({ type: "EDIT_POST_ERROR", payload: "Edit post error"})
  });
};


export const addComment = (id, comment) => (dispatch) => {
  api()
    .post(`/posts/${id}/comments`, comment)
    .then((response) => {
      dispatch({ type: "ADD_COMMENT", payload: response.data })
    })
    .catch((error) => {
      dispatch({
        type: "ADD_COMMENT_ERROR",
        payload: "add comment   error",
      });
    });
};

export const addPost = ( post , push, sethata) => (dispatch) => {
  api()
  .post("/posts", post)
  .then((response) => {
    dispatch({ type: "ADD_POST", payload: response.data })
    push("/");
    sethata(null);
  })
  .catch((error) => {
    dispatch({
      type: "ADD_POST_ERROR",
      payload: "add post  error",
    });
  });
};

export const deletePost = (id, setShow, push  ) => (dispatch) => {
  api()
  .delete(`/posts/${id}`)
  .then(()=> {
    dispatch({ type: "DELETE_POST", payload: id })
    setShow(false);
      push("/")
  })
  .catch(()=> {
    dispatch({
      type: "DELETE_POST_ERROR",
      payload: "delete post   error",
    });
  })
};