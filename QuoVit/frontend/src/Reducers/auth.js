import { Redirect } from "react-router";

let initialState = {
  name: localStorage.getItem("quovitUserName") || "",
  profileImg: localStorage.getItem("quovitUserImg") || "",
  _id: localStorage.getItem("quovitUserId") || null,
  savedPosts: localStorage.getItem("quovitUserSaved") || [],
  loading: true
}
let auth = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      <Redirect to="/Login" />
      return {
        ...initialState,
      };
    case "SIGN_IN":
      const user2 = action.payload;
      <Redirect to="/" />
      return {
        ...initialState,
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
    default:
      return state;
  }
};
export default auth;
