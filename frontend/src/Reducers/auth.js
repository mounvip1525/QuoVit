// import jwtDecode from "jwt-decode"

let initialState = {
    name:"",
    email:"",
    // token:localStorage.getItem("quovit"),
    _id:null
}
let auth = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_UP":
        // const user = jwtDecode(action.token); 
        const user = action.payload
      return {
        ...initialState,
        // token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
      case "SIGN_IN":
        return state
      default:
        return state;
    }
  };
  export default auth;
  