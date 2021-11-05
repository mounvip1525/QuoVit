let ideas = (ideas = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "ADD":
        return [...ideas,action.payload];
      default:
        return ideas;
    }
  };
  export default ideas;
  