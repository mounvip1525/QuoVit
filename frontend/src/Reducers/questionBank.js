let questionBank = (courses = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "UPLOAD_PAPER":
        return courses;
      default:
        return courses;
    }
  };

  export default questionBank;
  