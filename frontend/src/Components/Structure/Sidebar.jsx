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
  const buttons = [
    {
      id: 1,
      name: "Saved Posts",
      img: save,
      link: "/Saved",
    },
    {
      id: 2,
      name: "Notifications",
      img: notifications,
      link: "/Notifications",
    },
    {
      id: 3,
      name: "Your Profile",
      img: profile,
      link: "/Profile",
    },
  ];
  return (
    <div className="sidebar-main">
      <button
        onClick={
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
        }
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
      <button>
        Logout <img src={logout} alt="logout" />
      </button>
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
