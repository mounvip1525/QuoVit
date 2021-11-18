import * as api from "../API";

export const followUser = (userId,followId) => async (dispatch) => {
  try {
    const { data } = await api.followUser(userId,followId);
    // dispatch({ type: "FOLLOW_USER", payload: data });
  } catch (error) {
    alert(error);
  }
};

export const unfollowUser = (userId,followId) => async (dispatch) => {
  try {
    const { data } = await api.unfollowUser(userId,followId);
    dispatch({ type: "UNFOLLOW_USER", payload: data });
  } catch (error) {
    alert(error);
  }
};

export const getSuggestedUsers = (id) => async (dispatch) => {
  try {
    if(id === null) 
    id = "6188299c20192f9a7c1f814c"
    const { data } = await api.getSuggestedUsers(id);
    console.log("suggestions",data)
    dispatch({ type: "FETCH_SUGGESTED_USERS" , payload: data });
  } catch (err) {
    alert(err)
  }
}

export const getCurrentUser = (id,userId) => async (dispatch) => {
  try {
    if(id!==userId){
      alert("not same")
    }
  } catch(err){
    alert(err)
  }
}
