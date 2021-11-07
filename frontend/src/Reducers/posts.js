let posts = (posts = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_POSTS":
        return action.payload;
      case "ADD_POST":
        return [...posts,action.payload];
        case "LIKE_POST":
            return action.payload;
        case "DISLIKE_POST":
            return action.payload;
      default:
        return posts;
    }
  };
  export default posts;
  