import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import main from "./img/Signup.png";
import avatar1 from "./img/Avatar1.png";
import avatar2 from "./img/Avatar2.png";
import avatar3 from "./img/Avatar3.png";
import avatar4 from "./img/Avatar4.png";
import avatar5 from "./img/Avatar5.png";
import avatar6 from "./img/Avatar6.png";
import avatar7 from "./img/Avatar7.png";
import avatar8 from "./img/Avatar8.png";
import avatar9 from "./img/Avatar9.png";
import avatar10 from "./img/Avatar10.png";
import "./css/Auth.css";

export default function Signup() {
  const [steps, setSteps] = useState(0);
  const [width, setWidth] = useState(1);
  const [avatar, setAvatar] = useState(0);
  const [color, setColor] = useState(0);
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
  ];
  const colors = [
    "#561FC3",
    "#A8351C",
    "#1599B6",
    "#6FAA0D",
    "#000000",
    "#C31F9F",
    "#C3951F",
    "#1F7EC3",
    "#F9601E",
    "#204466",
  ];
  const [user, setUser] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    campus: "",
    github: "",
    resume: "",
    password: "",
    confirm_password: "",
    avatar: avatar,
    color: colors[color],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setUser({ ...user, resume: e.target.files[0] });
  };
  return (
    <div className="login-main">
      <div className="login-1">
        <div>
          <img src={logo} alt="QuoVit" />
          <p className="name">A Quora Clone for College</p>
        </div>
        <img src={main} alt="Login" />
      </div>
      <div>
      <form onSubmit={handleSubmit} className="login-form" style={{margin:"2rem auto"}}>
        <div className="form-head">
          <h2>Create an account</h2>
          <p style={{ fontSize: "x-small" }}>
            Already have an account <Link to="/Login">Login</Link>
          </p>
          <div className="progress-main">
            <div className="progress-track" style={{ width: `${width}%` }} />
          </div>
        </div>
        {steps === 0 ? (
          <div>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="John Doe"
                value={user.name}
              />
            </div>
            <div>
              <label htmlFor="email">VIT Email</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                placeholder="johndoe2019@vitstudent.ac.in"
              />
            </div>
            <div>
              <label htmlFor="year">Year of Study</label>
              <input
                type="text"
                id="year"
                name="year"
                onChange={handleChange}
                value={user.year}
                placeholder="Ex. 3rd Year"
              />
            </div>
            <div>
              <label htmlFor="branch">Branch</label>
              <input
                type="text"
                id="branch"
                name="branch"
                onChange={handleChange}
                value={user.branch}
                placeholder="Ex. CSE"
              />
            </div>
            <div>
              <label htmlFor="campus">Campus</label>
              <input
                type="text"
                id="campus"
                name="campus"
                onChange={handleChange}
                placeholder="Ex. Vellore"
                value={user.campus}
              />
            </div>
            <button
              onClick={() => {
                setSteps(1);
                setWidth(50);
              }}
            >
              Next
            </button>
          </div>
        ) : steps === 1 ? (
          <div>
            <div>
              <label htmlFor="github">Github Username</label>
              <input
                type="text"
                id="github"
                name="github"
                onChange={handleChange}
                value={user.github}
              />
            </div>
            <div>
              <label htmlFor="resume">Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
            <div>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                onChange={handleChange}
                value={user.confirm_password}
              />
            </div>
            <div className="signup-btns">
              <button onClick={() => setSteps(0)}>
                <ChevronLeft />
              </button>
              <button
                onClick={() => {
                  setSteps(2);
                  setWidth(95);
                }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="avatar">Choose an Avatar</label>
            <div className="signup-avatar">
              {avatars.map((a, index) => (
                <img
                  src={a}
                  alt={index}
                  key={index}
                  className={index === avatar ? "avatar-selected" : ""}
                  onClick={() => setAvatar(index)}
                />
              ))}
            </div>
            <label htmlFor="background">Pick a Color</label>
            <div className="signup-colors">
              {colors.map((c, index) => (
                <div
                  key={index}
                  className={index === color ? "color-selected" : ""}
                >
                  <div
                    style={{ background: c }}
                    onClick={() => setColor(index)}
                  />
                </div>
              ))}
            </div>
            <button type="submit">Create</button>
          </div>
        )}
      </form>
      </div>
    </div>
  );
}
