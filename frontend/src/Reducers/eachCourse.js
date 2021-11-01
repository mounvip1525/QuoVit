let courses = (eachCourse = [], action) => {
    switch (action.type) {
      case "FETCH_BY_COURSENAME":
        return action.payload;
    case "DOWNLOAD_PAPER":
        return eachCourse;
      default:
        return eachCourse;
    }
  };

  export default courses;
  