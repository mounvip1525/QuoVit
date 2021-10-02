import * as api from '../API'

export const getConfessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchConfessions();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};