let initialState = {
  ideas: [],
  loading: false
}
let ideas = (state=initialState, action) => {
    switch (action.type) {
      case "FETCH_ALL_IDEAS":
        return { ideas : action.payload , loading:false };
      case "ADD_IDEA":
        return {ideas: [...state.ideas,action.payload], loading: false };
      case "SET_I_LOADING":
        return {...state,loading:true}
      default:
        return state;
    }
  };
  export default ideas;
  