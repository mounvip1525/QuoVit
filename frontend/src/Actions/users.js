import * as api from "../API";

export const unfollowUser = (userId,followId) => async (dispatch) => {
  try {
    const { data } = await api.unfollowUser(userId,followId);
    dispatch({ type: "UNFOLLOW_USER", payload: data });
  } catch (error) {
    alert(error);
  }
};
