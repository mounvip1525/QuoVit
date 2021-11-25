import * as api from "../API";

export const signUp = (user) => async (dispatch) => {
    try {
      const {data} = await api.signUp(user);
    if(data.message){
      alert(data.message)
      window.location.replace("/Signup")
    } else {
      window.location.replace("/Login")
      dispatch({ type: "SIGN_UP",  payload: data});
    }
    } catch (error) {
      console.log(error.message);
    }
  };

export const signIn = (user) => async (dispatch) => {
  try {
    const {data} = await api.signIn(user);
  if(data.message){
    alert(data.message)
  } else{
    console.log("data",data)
    localStorage.setItem("quovitUserId",data._id)
    localStorage.setItem("quovitUserName",data.name)
    localStorage.setItem("quovitUserImg",data.profileImg)
    localStorage.setItem("quovitUserSaved",data.savedPosts)
    dispatch({ type: "SIGN_IN",  payload: data});
    alert("sucess")
    const data2 = await api.fetchPosts(data._id);
    dispatch({ type: "FETCH_ALL_POSTS", payload: data2.data });
  }
  } catch (error) {
    console.log("a1",error)
  }
};