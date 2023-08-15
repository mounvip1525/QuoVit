let initialState = {
  facultyReviews: [],
  loading: false
}
let facultyReviews = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ALL_FACULTIES":
        return {facultyReviews: action.payload, loading:false};
      case "ADD_FACULTY":
        return {facultyReviews : [...state.facultyReviews,action.payload] , loading:false};
      case "RATE_FACULTY":
          return {facultyReviews: [...state.facultyReviews.filter(f=>f._id !== action.payload._id),action.payload],loading: false};
      case "SET_F_LOADING":
        return {...state,loading:true}
      case "CLEAR_F_LOADING":
        return {...state,loading:false}
            default:
        return state;
    }
  };
  export default facultyReviews;
  