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
