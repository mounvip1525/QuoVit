let initialState = {
  confessions:[],loading: false
}
let confessions = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_CONFESSIONS":
      return {
        confessions: action.payload,loading:false};
    case "ADD_CONFESSION":
      return {confessions: [...state.confessions,action.payload],loading:false};
    case "SET_C_LOADING": 
      return {
        ...state, loading:true
      };
    default:
      return state;
  }
};
export default confessions;
