import * as api from "../API";

export const getIdeas = () => async (dispatch) => {
  try {
    const { data } = await api.fetchIdeas();
    dispatch({ type: "FETCH_ALL_IDEAS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addIdea = (idea,id) => async (dispatch) => {
  try {
      if(id){
        const { data } = await api.addIdea(idea,id);
        console.log(data)
        dispatch({type: "ADD_IDEA", payload: data});
      } 
  } catch(error) {
    console.log(error.message);
  }
}
