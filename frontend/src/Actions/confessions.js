import * as api from "../API";

export const getConfessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchConfessions();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addConfession = (newConfession) => async (dispatch) => {
  try {
    const { data } = await api.addConfession(newConfession);
    dispatch({type: "ADD", payload: data});
  } catch(error) {
    console.log(error.message);
  }
}
