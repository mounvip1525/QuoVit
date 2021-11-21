import * as api from "../API";

export const getConfessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchConfessions();
    dispatch({ type: "FETCH_ALL_CONFESSIONS", payload: data });
    dispatch({ type: "CLEAR_LOADING" })
  } catch (error) {
    console.log(error.message);
  }
};

export const addConfession = (id,newConfession) => async (dispatch) => {
  try {
    if(id){
      const { data } = await api.addConfession(newConfession);
    dispatch({type: "ADD_CONFESSION", payload: data});
    } else {
      alert("Login first")
    }
  } catch(error) {
    console.log(error.message);
  }
}
