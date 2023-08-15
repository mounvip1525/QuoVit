import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from "../../Actions/auth";
import { Link } from "react-router-dom";
import * as Validate from './helper.auth'
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import logo from "../../Assets/logo.png";
import main from "./img/Signup.png";
import "./css/Auth.css";

export default function Signup() {
  const history = useHistory()
  const state = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [steps, setSteps] = useState(0);
  const [width, setWidth] = useState(1);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    branch: "",
    campus: "Vellore",
    githubUsername: "",
    profileImg: "",
    expertise:"",
    password: "",
    confirm_password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate.nameValidation(user.name) && 
        Validate.emailValidation(user.email) && 
        Validate.branchValidation(user.branch) && 
        Validate.mobileValidation(user.phoneNumber) && 
        Validate.passwordValidation(user.password) && 
        Validate.confirmPasswordValidation(user.confirm_password)) {
      dispatch(signUp(user))
      setUser({
        name: "",
        email: "",
        phoneNumber: "",
        branch: "",
        campus: "Vellore",
        githubUsername: "",
        profileImg: "",
        password: "",
        confirm_password: "",
        expertise:""
      })
      if(state.name){
        setSteps(2);
        setWidth(100);
      }
      // history.push("/Login")
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleProfileImgChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUser({ ...user, profileImg: base64 })
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
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
        <form onSubmit={handleSubmit} className="login-form" style={{ margin: "2rem auto", width: "30rem" }} id="signUp-form">
          <div className="form-head">
            <h2>Create an account</h2>
            <p style={{ fontSize: "x-small" }}>
              Already have an account? <Link to="/Login">Login</Link>
            </p>
            <div className="progress-main">
              <div className="progress-track" style={{ width: `${width}%` }} />
            </div>
          </div>
          {steps === 0 ? (
            <div>
              <div>
                <label htmlFor="name">Full Name <span style={{ color: "red" }}>*</span></label>
                <input
                  type="text"
                  id="s-name"
                  name="name"
                  onChange={handleChange}
                  placeholder="John Doe"
                  value={user.name}
                />
              </div>
              <div>
                <label htmlFor="email">VIT Email <span style={{ color: "red" }}>*</span></label>
                <input
                  type="text"
                  id="s-email"
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                  placeholder="johndoe2019@vitstudent.ac.in"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Mobile Number <span style={{ color: "red" }}>*</span></label>
                <input
                  type="text"
                  id="s-phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={user.phoneNumber}
                  placeholder="Ex. +91 9676662345"
                  pattern="[0-9+]{3,4} [0-9 ]{4,15}"
                />
              </div>
              <div>
                <label htmlFor="branch">Branch <span style={{ color: "red" }}>*</span></label>
                <input
                  type="text"
                  id="s-branch"
                  name="branch"
                  onChange={handleChange}
                  value={user.branch}
                  placeholder="Ex. CSE"
                />
              </div>
              <div>
                <label htmlFor="campus">Campus</label>
                <select name="campus" id="campus" onChange={handleChange}>
                  <option value="Vellore">Vellore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="AP">AP</option>
                  <option value="Bhopal">Bhopal</option>
                </select>
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
                <label htmlFor="githubUsername">Github Username</label>
                <input
                  type="text"
                  id="githubUsername"
                  name="githubUsername"
                  onChange={handleChange}
                  value={user.githubUsername}
                />
              </div>
              <div>
                <label htmlFor="expertise">Your Expertise</label>
                <select name="expertise" id="expertise" onChange={handleChange}>
                  <option value="Web Development">Web Development</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Python Developer">Python Developer</option>
                  <option value="Blockchain Dev">Blockchain Dev</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div>
                <label htmlFor="profileImg">Choose your profile photo</label>
                <input
                  type="file"
                  id="profileImg"
                  name="profileImg"
                  onChange={handleProfileImgChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
                <input
                  type="password"
                  id="s-password"
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm_password">Confirm Password <span style={{ color: "red" }}>*</span></label>
                <input
                  type="password"
                  id="s-confirm_password"
                  name="confirm_password"
                  onChange={handleChange}
                  value={user.confirm_password}
                  required
                />
              </div>
              <div className="signup-btns">
                <button onClick={() => setSteps(0)}>
                  <ChevronLeft />
                </button>
                <button type="submit"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 style={{ textAlign: "center" }}>Successfully registered to QuoVit!</h2>
              <button><Link to="/Login" style={{ textDecoration: "none", color: "white" }}>Login</Link></button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
