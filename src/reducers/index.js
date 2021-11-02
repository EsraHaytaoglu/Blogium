const INITIAL_STATE = {
    postList: [],
    postListError: "",
};

export const reducer = (state =INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_POST_LIST":
          return {...state, postList: action.payload}
        case "GET_POST_LIST_ERROR":
            return { ...state, postListError: action.payload }
        default:
            return state;
    }
    
}