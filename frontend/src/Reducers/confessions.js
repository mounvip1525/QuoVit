let confessions = (confessions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_CONFESSIONS":
      return action.payload;
    case "ADD_CONFESSION":
      return [...confessions,action.payload];
    default:
      return confessions;
  }
};
export default confessions;
