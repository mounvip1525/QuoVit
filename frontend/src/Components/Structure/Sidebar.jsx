import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import add from "./img/add.png";
import logout from "./img/Logout.png";
import notifications from "./img/notifications.png";
import profile from "./img/profile.png";
import save from "./img/save.png";
import "./css/Sidebar.css";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "../../Actions/auth";

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
  const handleLogout = () => {
    dispatch({type:"SIGN_OUT"})
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
      img: save,
      link: auth._id ? "/Saved" : "/Login",
    },
    {
      id: 2,
      name: "Notifications",
      img: notifications,
      link: auth._id ? "/Notifications" : "/Login",
    },
    {
      id: 3,
      name: "Your Profile",
      img: profile,
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
            : path === "/" || path === "/Saved" || path === "/Notifications"
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
            <img src={btn.img} alt={btn.name} />
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
