let initialState = {
  posts: [],
  savedPosts: [],
  userPosts:[],
  profileDetails:[],
  loading: false
}
let posts = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
    case "LIKE_POST":
    case "DISLIKE_POST":
    case "TOGGLE_SAVE_POST":
    case "ADD_COMMENT":
      return { ...initialState, posts: action.payload.uniquePosts, savedPosts: action.payload.savedPosts, loading:false };
    case "ADD_POST":
      return { ...initialState, posts: [action.payload, ...state.posts],loading:false }
    case "FETCH_SAVED_POSTS":
      return { ...initialState, savedPosts: action.payload ,loading:false};
    case "FETCH_PROFILE_DETAILS":
    case "DELETE_POST":
    case "UNFOLLOW_USER":
      return { ...initialState, userPosts: action.payload.posts, profileDetails:action.payload,loading:false};
    case "CLEAR_POSTS":
      return {  posts: [],
        savedPosts: [],
        userPosts:[],
        profileDetails:[],
        loading:false
      };
      case "SET_LOADING": 
      return {
        ...state, loading:true
      };
      case "CLEAR_LOADING": 
      return {
        ...state, loading:true
      };
    default:
      return state;
  }
};
export default posts;

