import * as api from "../API";

export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    dispatch({ type: "FETCH_ALL_PAPERS", payload: data });
  } catch (error) {
    alert(error.message);
  }
};

export const uploadPaper = (courseName,courseCategory,examType,year,formData) => async (dispatch) => {
    try {
      console.log(courseName,courseCategory,examType,year,formData)
        const { data } = await api.uploadPaper(courseName,courseCategory,examType,year,formData);
        dispatch({ type:"UPLOAD_PAPER", payload: data })
    } catch (error) {
        alert(error.message)
    }
}