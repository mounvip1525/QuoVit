let initialState = {
  eachCourse:[],
  loading:false
}
let courses = (state = initialState , action) => {
    switch (action.type) {
      case "FETCH_BY_COURSENAME":
        return {eachCourse: action.payload, loading: false };
    case "DOWNLOAD_PAPER":
        return {eachCourse: initialState.eachCourse};
    case "SET_QP_LOADING":
      return { ...state, loading : true }
      default:
        return state;
    }
  };

  export default courses;
  