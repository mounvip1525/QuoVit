// import jwtDecode from "jwt-decode"

import { Redirect } from "react-router";

let initialState = {
  name: localStorage.getItem("quovitUserName") || "",
  profileImg: localStorage.getItem("quovitUserImg") || "",
  // token:localStorage.getItem("quovit"),
  _id: localStorage.getItem("quovitUserId") || null,
  savedPosts: localStorage.getItem("quovitUserSaved") || [],
  loading: true
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
        savedPosts: user2.savedPosts,
      };
    case "SIGN_OUT":
      localStorage.removeItem("quovitUserName")
      localStorage.removeItem("quovitUserImg")
      localStorage.removeItem("quovitUserId")
      localStorage.removeItem("quovitUserSaved")
      window.location.replace("/")
      return {
        name: "",
        profileImg: "",
        _id: null,
        savedPosts: []
      }
    case "REDIRECT_LOGIN":
      // window.location.replace("/")
      return state
    case "SET_LOADING":
      return {
        ...initialState, loading: true
      }
    case "CLEAR_LOADING":
      return {
        ...initialState, loading: false
      }
    default:
      return state;
  }
};
export default auth;
