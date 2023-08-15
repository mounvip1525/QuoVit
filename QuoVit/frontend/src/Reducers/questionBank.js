let initialState = {
  courses:[],
  loading: false
}
let questionBank = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ALL_PAPERS":
        return {courses:action.payload,loading: false};
      case "UPLOAD_PAPER":
        window.location.replace("/QuestionBank")
        return {courses:action.payload, loading: false};
      case "SET_Q_LOADING":
        return { ...state, loading : true }
      default:
        return state;
    }
  };

  export default questionBank;
  