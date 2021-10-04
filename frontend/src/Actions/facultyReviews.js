import * as api from "../API";

export const getFacultyReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFacultyReviews();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addFaculty = (newFaculty) => async (dispatch) => {
  try {
    const { data } = await api.addFaculty(newFaculty);
    dispatch({type: "ADD", payload: data});
  } catch(error) {
    console.log(error.message);
  }
}

export const rateFaculty = (id,rating) => async (dispatch) => {
    try {
      const { data } = await api.rateFaculty(id,rating);
      dispatch({ type: "RATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
