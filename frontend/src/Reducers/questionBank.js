let questionBank = (courses = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      default:
        return courses;
    }
  };

  export default questionBank;
  