import * as api from "../API";

export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};