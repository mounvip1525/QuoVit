let confessions = (confessions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "ADD":
      return [...confessions,action.payload];
    default:
      return confessions;
  }
};
export default confessions;
