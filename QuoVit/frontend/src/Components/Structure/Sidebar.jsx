import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch , useSelector } from "react-redux";
import "./css/Sidebar.css";
import { Add, Person, TurnedIn } from "@material-ui/icons";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function Sidebar({ type, showConfessModal, showFacultyModal,showIdeaModal,showPaperModal,showPostModal }) {
  const dispatch = useDispatch();
  const auth = useSelector((state)=>state.auth)
  const history = useHistory();
  const path = history.location.pathname;
  const [selected, setSelected] = useState(0);
  const handleClick = (id, link) => {
    setSelected(id);
    history.push(link,{id:auth._id});
  };
  console.log("path",path)
  const handleLogout = () => {
    dispatch({type:"SIGN_OUT"})
    dispatch({type:"CLEAR_POSTS"})
  }
  const handleLogin = () => {
    history.push("/Login")
  }
  const handleBlah = () => {
    history.push("/Login")
  }
  const buttons = [
    {
      id: 1,
      name: "Saved Posts",
      link: auth._id ? "/Saved" : "/Login",
    },
    {
      id: 2,
      // name: "Notifications",
      // link: auth._id ? "/Notifications" : "/Login",
      name: "Mentorship",
      link: "/Mentorship"
    },
    {
      id: 3,
      name: "Your Profile",
      link: auth._id ? "/Profile" : "/Login",
    },
  ];
  return (
    <div className="sidebar-main">
      <button
        onClick={
          auth._id ? 
          path === "/Confessions"
            ? showConfessModal
            : path === "/FacultyReview"
            ? showFacultyModal
            : path === "/" || path === "/Saved" || path === "/Notifications" || path === "/Mentorship"
            ? showPostModal
            : path === "/IdeasBlock"
            ? showIdeaModal
            : path === "/QuestionBank" | path === "/EachCourse"
            ? showPaperModal
            : ""
        : handleBlah}
      >
        {type === "landing"
          ? "Ask/Post"
          : type === "confessions"
          ? "Add confession"
          : type === "questionBank"
          ? "Add Paper"
          : type === "facultyReviews"
          ? "Add new faculty"
          : "Add new Idea"}
        <Add className="side-add" />
      </button>
      <div>
        {buttons.map((btn) => (
          <button
            onClick={() => handleClick(btn.id, btn.link)}
            className={btn.id === selected ? "side-selected" : ""}
          >
            {btn.id === 1 ? <TurnedIn /> : btn.id === 2 ? 
            // <NotificationsIcon /> 
            <AccessibilityNewIcon />
            : <Person />} 
            {btn.name}
          </button>
        ))}
      </div>
      {auth._id ? 
      <button onClick={handleLogout}>
        Logout <LogoutIcon />
      </button> :
      <button onClick={handleLogin}>
        Login <LoginIcon />
      </button>
      }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showConfessModal: () => dispatch({ type: "ShowConfessModal" }),
  showPaperModal: () => dispatch({ type: "ShowPaperModal" }),
  showIdeaModal: () => dispatch({ type: "ShowIdeaModal" }),
  showPostModal: () => dispatch({ type: "ShowPostModal" }),
  showFacultyModal: () => dispatch({ type: "ShowFacultyModal" }),
});

export default connect(null, mapDispatchToProps)(Sidebar);
