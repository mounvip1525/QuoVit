import * as api from "../API";

export const getFacultyReviews = () => async (dispatch) => {
  dispatch({ type: "SET_F_LOADING" })
  try {
    const { data } = await api.fetchFacultyReviews();
    dispatch({ type: "FETCH_ALL_FACULTIES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addFaculty = (newFaculty, id) => async (dispatch) => {
  try {
    if (id) {
      dispatch({ type: "SET_F_LOADING" })
      const { data } = await api.addFaculty(newFaculty, id);
      if (data.message) {
        dispatch({ type: "CLEAR_F_LOADING" })
        alert(data.message)
      } else {
        dispatch({ type: "ADD_FACULTY", payload: data });
      }
    } else {
      alert("Login first")
    }
  } catch (error) {
    console.log(error.message);
  }
}

export const rateFaculty = (userId, facId, rating) => async (dispatch) => {
  try {
    if (userId) {
      dispatch({ type: "SET_F_LOADING" })
      const { data } = await api.rateFaculty(userId, facId, rating);
      if (data.message) {
        dispatch({ type: "CLEAR_F_LOADING" })
        alert(data.message)
      } else {
        dispatch({ type: "RATE_FACULTY", payload: data });
      }
    } else {
      alert("Login first")
    }
  } catch (error) {
    console.log(error.message);
  }
};
