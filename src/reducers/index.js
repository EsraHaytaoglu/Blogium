const INITIAL_STATE = {
    postList: [],
    postListError: "",
    postDetail: {
        id: "", title: "", created_at:"", comments: []
    },
    postDetailError: "",
    addCommentError: "",
    deletePostError: "",
    editPostError: "",
};

export const reducer = (state =INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_POST_LIST":
          return {...state, postList: action.payload, postListError: ""}
        case "GET_POST_LIST_ERROR":
            return { ...state, postListError: action.payload }
        case "GET_POST":
            return {...state, postDetail: action.payload, postDetailError: ""}
        case "GET_POST_ERROR":
            return { ...state, postDetailError: action.payload }
        case "ADD_COMMENT":
            return { 
                ...state,
                postDetail: {
                 ...state.postDetail,    
                comments: [...state.postDetail.comments, action.payload], addCommentError: ""
               }     
            }
        case "ADD_POST":
            return {...state,  postList: [...state.postList, action.payload] }
        case "ADD_COMMENT_ERROR":
            return { ...state, addCommentError: action.payload }
        case "DELETE_POST": 
            return { ...state, postList: state.postList.filter(post => post.id !== action.payload),  deletePostError: "" }
        case "DELETE_POST_ERROR":
            return { ...state, deletePostError: action.payload }
        case "EDIT_POST":
            return {...state, postDetail: {...state.postDetail, ...action.payload}, editPostError: ""}
        case "EDIT_POST_ERROR":
            return {...state, editPostError: action.payload}

        default:
            return state;
    }
    
}