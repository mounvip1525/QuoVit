let ideas = (ideas = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_IDEAS":
        return action.payload;
      case "ADD_IDEA":
        return [...ideas,action.payload];
      default:
        return ideas;
    }
  };
  export default ideas;
  