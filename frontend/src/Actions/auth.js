import * as api from "../API";

export const signUp = (user) => async (dispatch) => {
    try {
      const {data} = await api.signUp(user);
    //   localStorage.setItem("token", token.data);
    //   dispatch({ type: "SIGN_UP", token: token.data });
    if(data.message){
      alert(data.message)
    }
    dispatch({ type: "SIGN_UP",  payload: data});
    } catch (error) {
      console.log(error.message);
    }
  };

export const signIn = (user) => async (dispatch) => {
  try {
    const {data} = await api.signIn(user);
  if(data.message){
    alert(data.message)
  } else{
    console.log("data",data)
    localStorage.setItem("quovitUserId",data._id)
    localStorage.setItem("quovitUserName",data.name)
    localStorage.setItem("quovitUserImg",data.profileImg)
    localStorage.setItem("quovitUserSaved",data.savedPosts)
    dispatch({ type: "SIGN_IN",  payload: data});
    alert("sucess")
    const data2 = await api.fetchPosts(data._id);
    dispatch({ type: "FETCH_ALL_POSTS", payload: data2.data });
  }
  } catch (error) {
    console.log("a1",error)
  }
};

// export const setLoading = () => async (dispatch) => {
//   try{
//     dispatch({ type: "SET_LOADING" })
//   } catch(err){
//     console.log(err)
//   }
// }

// export const clearLoading = () => async (dispatch) => {
//   try{
//     dispatch({ type: "CLEAR_LOADING" })
//   } catch(err){
//     console.log(err)
//   }
// }

// export const signIn = (email, password) => {
//   return (dispatch) => {
//     axios
//       .post(`${url}/signin`, { email, password })
//       .then((token) => {
//         localStorage.setItem("token", token.data);

//         dispatch({
//           type: "SIGN_IN",
//           token: token.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);

//         toast.error(error.response?.data, {
//           position: toast.POSITION.BOTTOM_RIGHT,
//         });
//       });
//   };
// };


// export const loadUser = () => {
//   return (dispatch, getState) => {
//     const token = getState().auth.token;
//     if (token) {
//       dispatch({
//         type: "USER_LOADED",
//         token,
//       });
//     } else return null;
//   };
// };