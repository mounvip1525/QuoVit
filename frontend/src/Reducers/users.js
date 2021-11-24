let initialState = {
  users : [] ,
  mentors: []
}
let users = (users = initialState, action) => {
    switch (action.type) {
      case "FETCH_SUGGESTED_USERS":
        return {...initialState, users: action.payload};
      case "FETCH_MENTORS":
        return {...initialState, mentors: action.payload }
      default:
        return users;
    }
  };
  export default users;
  