import { Redirect } from "react-router";
import * as api from "../API";

export const getPosts = (id) => async (dispatch) => {
  try {
    let uid = id;
    if(uid === null) 
        uid = "6186252d1cee3b1f1483e597"
    const { data } = await api.fetchPosts(uid);
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (postid,userid) => async (dispatch) => {
    try {
      let uid = userid;
      if(uid === null) 
        //   <Redirect to="/" />
        alert("bruh")
      const { data } = await api.likePost(postid,userid);
      console.log("likeeeeeeee",data)
    // console.log("hello like")
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
        alert("bruh")
      const { data } = await api.dislikePost(postid,userid);
      dispatch({ type: "DISLIKE_POST", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const addIdea = (idea,id) => async (dispatch) => {
  try {
      if(id){
        const { data } = await api.addIdea(idea,id);
        console.log(data)
        dispatch({type: "ADD_POST", payload: data});
      } 
  } catch(error) {
    console.log(error.message);
  }
}
