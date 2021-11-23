import * as api from "../API";

export const getPosts = (id) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
  try {
    if(id === null) 
        id = "619ca53ce8ca95b0fa19defd"
    const { data } = await api.fetchPosts(id);
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
    // dispatch({ type: "CLEAR_LOADING" })
  } catch (error) {
    // alert(error.message);
    alert(error)
  }
};

export const getSavedPosts = (id) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
  try {
    if(id === null) 
        id = "619ca53ce8ca95b0fa19defd"
    const { data } = await api.fetchSavedPosts(id);
    dispatch({ type: "FETCH_SAVED_POSTS", payload: data });
  } catch (error) {
    alert(error.message);
  }
};

export const toggleSavePost = (postid,userid) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
  try {
    if(userid === null) 
      alert("bruh login first")
    else {
    const { data } = await api.toggleSavePost(postid,userid);
    dispatch({ type: "TOGGLE_SAVE_POST", payload: data });
    }
  } catch (error) {
    alert(error);
  }
};

export const likePost = (postid,userid) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
    try {
      if(userid === null) 
        alert("bruh login first")
        else {
      const { data } = await api.likePost(postid,userid);
      dispatch({ type: "LIKE_POST", payload: data });
        }
    } catch (error) {
      alert(error.message);
    }
  };


  export const dislikePost = (postid,userid) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
    try {
      if(userid === null) 
        alert("bruh login first") 
        else {
      const { data } = await api.dislikePost(postid,userid);
      dispatch({ type: "DISLIKE_POST", payload: data });
        }
    } catch (error) {
      alert(error.message);
    }
  };

export const addPost = (post,id) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
  try {
      if(id){
        const { data } = await api.addPost(post,id);
        console.log(data)
        dispatch({type: "ADD_POST", payload: data});
      } 
  } catch(error) {
    alert(error);
  }
}

export const profileDetails = (id) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
  try {
    if(id){
      const { data } = await api.profileDetails(id);
      console.log("daaaaaata",data,id)
      dispatch({type:"FETCH_PROFILE_DETAILS", payload:data})
    } else {
      alert("fucker login first")
    }
  } catch (err) {
    alert(err)
  }
}
export const updateProfileDetails = (id,userId,edits) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
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
    alert(err)
  }
}

export const deletePost = (postid,userId) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
  try {
    if(!userId){
      alert("Login first")
    } else {
      const { data } = await api.deletePost(postid,userId);
      console.log("del",data)
      dispatch({type:"DELETE_POST",payload:data})
    }
  } catch(err){
    alert(err)
  }
}

export const addComment = (postId,userId,comment) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" })
  try {
    if(!userId){
      alert("Login first")
    } else {
      const { data } = await api.addComment(postId,userId,comment);
      dispatch({ type:"ADD_COMMENT" , payload:data })
    }
  } catch(err){
    alert(err)
  }
}
