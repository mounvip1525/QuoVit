// let posts = (posts = [], action) => {
//     switch (action.type) {
//       case "FETCH_ALL_POSTS":
//         return action.payload;
//       case "ADD_POST":
//         return [action.payload,...posts];
//         case "LIKE_POST":
//             return action.payload;
//         case "DISLIKE_POST":
//             return action.payload;
//       default:
//         return posts;
//     }
//   };
//   export default posts;


  let initialState = {
    posts:[],
    savedPosts:[]
  }
  let posts = (state=initialState, action) => {
      switch (action.type) {
        case "FETCH_ALL_POSTS":
        case "LIKE_POST":
        case "DISLIKE_POST":
        case "TOGGLE_SAVE_POST":
          return {posts:action.payload.uniquePosts,savedPosts:action.payload.savedPosts};
        case "ADD_POST":
          return {...initialState,posts:[action.payload,...state.posts]}
        case "FETCH_SAVED_POSTS":
          return {...initialState, savedPosts:action.payload};
        default:
          return state;
      }
    };
    export default posts;
    
  