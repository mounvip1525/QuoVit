let users = (users = [], action) => {
    switch (action.type) {
      case "FETCH_SUGGESTED_USERS":
        return action.payload;
      default:
        return users;
    }
  };
  export default users;
  