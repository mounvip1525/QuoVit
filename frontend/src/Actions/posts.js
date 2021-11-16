import { Redirect } from "react-router";
import * as api from "../API";

export const getPosts = (id) => async (dispatch) => {
  try {
    let uid = id;
    if(uid === null) 
        uid = "6188299c20192f9a7c1f814c"
    const { data } = await api.fetchPosts(uid);
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    alert(error.message);
  }
};

export const getSavedPosts = (id) => async (dispatch) => {
  try {
    let uid = id;
    if(uid === null) 
        uid = "6188299c20192f9a7c1f814c"
    const { data } = await api.fetchSavedPosts(uid);
    dispatch({ type: "FETCH_SAVED_POSTS", payload: data });
  } catch (error) {
    alert(error.message);
  }
};

export const toggleSavePost = (postid,userid) => async (dispatch) => {
  try {
    let uid = userid;
    if(uid === null) 
      //   <Redirect to="/" />
      alert("bruh login first")
    const { data } = await api.toggleSavePost(postid,userid);
    dispatch({ type: "TOGGLE_SAVE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (postid,userid) => async (dispatch) => {
    try {
      let uid = userid;
      if(uid === null) 
        //   <Redirect to="/" />
        alert("bruh login first")
      const { data } = await api.likePost(postid,userid);
      dispatch({ type: "LIKE_POST", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const dislikePost = (postid,userid) => async (dispatch) => {
    try {
      let uid = userid;
      if(uid === null) 
        //   <Redirect to="/" />
        alert("bruh login first")
      const { data } = await api.dislikePost(postid,userid);
      dispatch({ type: "DISLIKE_POST", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const addPost = (post,id) => async (dispatch) => {
  try {
      if(id){
        const { data } = await api.addPost(post,id);
        console.log(data)
        dispatch({type: "ADD_POST", payload: data});
      } 
  } catch(error) {
    console.log(error);
  }
}

export const profileDetails = (id) => async (dispatch) => {
  try {
    if(id){
      const { data } = await api.profileDetails(id);
      console.log("data",data)
      dispatch({type:"FETCH_PROFILE_DETAILS", payload:data})
    } else {
      alert("fucker login first")
    }
  } catch (err) {
    console.log(err)
  }
}
export const updateProfileDetails = (id,userId,edits) => async (dispatch) => {
  try {
    if(id !== userId){
      alert("You can only edit your own post")
    } else {
      const p = edits.proj.split(",");
      const s = edits.skil.split(",");
      const w = edits.workExp.split(",")
      const { data } = await api.editProfileDetails(id,{projects:p,skills:s,workExperience:w});
      dispatch({type:"FETCH_PROFILE_DETAILS",payload:data})
    }
  } catch(err){
    console.log(err)
  }
}
