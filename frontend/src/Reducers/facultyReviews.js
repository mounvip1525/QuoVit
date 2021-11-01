let facultyReviews = (facultyReviews = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "ADD":
        return [...facultyReviews,action.payload];
      case "RATE":
          return [...facultyReviews.filter(f=>f._id !== action.payload._id),action.payload];
      default:
        return facultyReviews;
    }
  };
  export default facultyReviews;
  