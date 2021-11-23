import * as api from "../API";

export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    dispatch({ type: "FETCH_ALL_PAPERS", payload: data });
    // dispatch({ type: "CLEAR_LOADING" })
  } catch (error) {
    alert(error.message);
  }
};

export const uploadPaper = (id,courseName,courseCategory,examType,year,formData) => async (dispatch) => {
    try {
      if(id){
        const { data } = await api.uploadPaper(courseName,courseCategory,examType,year,formData);
        dispatch({ type:"UPLOAD_PAPER", payload: data })
      } else {
        alert("login first")
      }
    } catch (error) {
        alert(error.message)
    }
}