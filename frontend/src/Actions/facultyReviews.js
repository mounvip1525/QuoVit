import * as api from "../API";

export const getFacultyReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFacultyReviews();
    dispatch({ type: "FETCH_ALL_FACULTIES", payload: data });
    // dispatch({ type: "CLEAR_LOADING" })
  } catch (error) {
    console.log(error.message);
  }
};

export const addFaculty = (newFaculty,id) => async (dispatch) => {
  try {
    if(id){
      const { data } = await api.addFaculty(newFaculty,id);
      if(data.message){
        alert(data.message)
      } else {
        dispatch({type: "ADD_FACULTY", payload: data});
      }
    } else {
      alert("Login first asshole")
    }
  } catch(error) {
    console.log(error.message);
  }
}

export const rateFaculty = (userId,facId,rating) => async (dispatch) => {
    try {
      if(userId){
        const { data } = await api.rateFaculty(userId,facId,rating);
        if(data.message){
          alert(data.message)
        } else {
      dispatch({ type: "RATE_FACULTY", payload: data });
        }
      } else {
        alert("Login first you ass")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
