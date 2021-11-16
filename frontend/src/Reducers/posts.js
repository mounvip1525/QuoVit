let initialState = {
  posts: [],
  savedPosts: [],
  userPosts:[],
  profileDetails:[]
}
let posts = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
    case "LIKE_POST":
    case "DISLIKE_POST":
    case "TOGGLE_SAVE_POST":
      return { ...initialState, posts: action.payload.uniquePosts, savedPosts: action.payload.savedPosts };
    case "ADD_POST":
      return { ...initialState, posts: [action.payload, ...state.posts] }
    case "FETCH_SAVED_POSTS":
      return { ...initialState, savedPosts: action.payload };
    case "FETCH_PROFILE_DETAILS":
      console.log("reducer",action.payload)
      // console.log("payload",action.payload.followers,[action.payload.followers])
      return { ...initialState, userPosts: action.payload.posts, profileDetails:action.payload}
    default:
      return state;
  }
};
export default posts;

