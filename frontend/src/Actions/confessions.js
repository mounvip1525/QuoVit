import * as api from "../API";

export const getConfessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchConfessions();
    dispatch({ type: "FETCH_ALL_CONFESSIONS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addConfession = (newConfession) => async (dispatch) => {
  try {
    const { data } = await api.addConfession(newConfession);
    dispatch({type: "ADD_CONFESSION", payload: data});
  } catch(error) {
    console.log(error.message);
  }
}
