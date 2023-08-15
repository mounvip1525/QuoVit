import React from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Paper, Avatar } from "@material-ui/core"; 
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import avatar from "./img/Avatar8.png";
import home from "./img/home.png";
import confessions from "./img/confessions.png";
import questionBank from "./img/document.png";
import facReview from "./img/facReview.png";
import ideas from "./img/ideasBlock.png";
import "./css/Navbar.css";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const state = useSelector(state => state.auth)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <nav className="nav">
      <div>
        <img src={logo} alt="QuoVit" />
      </div>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor={"secondary"}
          centered
          className="nav-tabs"
        >
          <Tab
            icon={<Avatar alt="Home" src={home} />}
            to="/"
            component={Link}
            {...a11yProps(0)}
            title="Home"
          />
          <Tab
            icon={<Avatar alt="Confessions" src={confessions} />}
            to="/Confessions"
            component={Link}
            {...a11yProps(1)}
            title="Confessions"
          />
          <Tab
            icon={<Avatar alt="Question Papers" src={questionBank} />}
            to="/QuestionBank"
            component={Link}
            {...a11yProps(2)}
            title="Question Bank"
          />
          <Tab
            icon={<Avatar alt="Ideas Block" src={ideas} />}
            to="/IdeasBlock"
            component={Link}
            {...a11yProps(3)}
            title="Ideas Block"
          />
          <Tab
            icon={<Avatar alt="Faculty Review" src={facReview} />}
            to="/FacultyReview"
            component={Link}
            {...a11yProps(4)}
            title="Faculty Review"
          />
        </Tabs>
      </Paper>
      <div>
        <div>
          <p style={{ fontSize: "x-small" }}>Logged in as</p>
          <p>{state.name || 'Guest'}</p>
        </div>
        <img src={state.profileImg || avatar} style={{ background: "black" }} className="avatar" alt="hello"/>
      </div>
    </nav>
  );
}
