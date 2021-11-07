import axios from "axios";
import * as api from "../API";

export const getPosts = (id) => async (dispatch) => {
  try {
    let uid = id;
    if(uid === null) {
        uid = "6186252d1cee3b1f1483e597"
    }
    const { data } = await api.fetchPosts(uid);
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
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
