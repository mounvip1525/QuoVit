let questionBank = (courses = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_PAPERS":
        return action.payload;
      case "UPLOAD_PAPER":
        window.location.replace("/QuestionBank")
        return action.payload;
      default:
        return courses;
    }
  };

  export default questionBank;
  