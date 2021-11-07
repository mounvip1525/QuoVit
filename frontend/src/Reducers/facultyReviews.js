let facultyReviews = (facultyReviews = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_FACULTIES":
        return action.payload;
      case "ADD_FACULTY":
        return [...facultyReviews,action.payload];
      case "RATE_FACULTY":
          return [...facultyReviews.filter(f=>f._id !== action.payload._id),action.payload];
      default:
        return facultyReviews;
    }
  };
  export default facultyReviews;
  