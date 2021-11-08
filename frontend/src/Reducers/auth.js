// import jwtDecode from "jwt-decode"

import { Redirect } from "react-router";

let initialState = {
    name:"",
    profileImg:"",
    // token:localStorage.getItem("quovit"),
    _id:null,
    savedPosts:[]
}
let auth = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_UP":
        // const user = jwtDecode(action.token); 
        // const user = action.payload
      return {
        ...initialState,
        // token: action.token,
        // name: user.name,
        // email: user.email,
        // _id: user._id,
      };
      case "SIGN_IN":
      // const user = jwtDecode(action.token); 
      const user2 = action.payload;
      <Redirect to="/" />
    return {
      ...initialState,
      // token: action.token,
      name: user2.name,
      profileImg: user2.profileImg,
      _id: user2._id,
      savedPosts:user2.savedPosts
    };
      default:
        return state;
    }
  };
  export default auth;
  