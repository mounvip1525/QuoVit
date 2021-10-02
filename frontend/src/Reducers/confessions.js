export default (confessions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return confessions;
    default:
      return confessions;
  }
};
