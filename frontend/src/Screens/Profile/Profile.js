import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getPosts, profileDetails } from "../../Actions/posts";
import MainLayout from "../../Components/Structure/Main";
import Sub from "../../Components/Structure/Sub";
import LandingCard from "../../Components/Cards/LandingCard";
import User from "../../Components/User/User";
import "./css/Profile.css";
import pencil from "./img/Pencil.png";
import bin from "./img/bin.png";
import avatar from "./img/avatar.png";
import { GitHub, Mail, Add, LinkedIn, WhatsApp } from "@material-ui/icons";

export default function Profile() {
  const dispatch = useDispatch();
  const {userPosts,followers,following} = useSelector((state) => state.posts);
  const auth = useSelector((state)=>state.auth)
  useEffect(() => {
    // dispatch(getPosts(auth._id));
    dispatch(profileDetails(auth._id))
  }, [dispatch,auth]);
  const [activeTab, setActiveTab] = useState("posts");
  const self = true;
  const user = 
    {
      name:"Mounvi Podapati",
      tagline:"3rd year CSE Undergrad",
      about:"lorem",
      skills:["react","frontend","backend"],
      workExperience:["Pariatur exercitation Lorem commodo eu culpa.","Elit enim consequat exercitation cillum ipsum magna laborum."],
      projects:["Pariatur exercitation Lorem commodo eu culpa.","Elit enim consequat exercitation cillum ipsum magna laborum."],
      mail:"munvip1525@gmail.com",
      linkedin:"mounvip1525/123456",
      whatsapp:"+91 9787774567",
      github:"mounvip1525",
      // resume:"resume"
    }
  return (
    <Sub>
      <div className="profile-main">
        <div>
          <div className="user-details">
            <div className="user-first">
              <img src={avatar} style={{ background: "black" }} alt="img" />
              <div className="user-contact">
                <h4>Connect with me</h4>
                <div>
                  <Mail />
                  <p>{user.mail}</p>
                </div>
                <div>
                  <LinkedIn />
                  <p>{user.linkedin}</p>
                </div>
                <div>
                  <WhatsApp />
                  <p>{user.whatsapp}</p>
                </div>
                <div>
                  <GitHub />
                  <p>{user.github}</p>
                </div>
                <div className="user-btn">
            {/* <button className="resume-btn">Resume</button> */}
          </div>
              </div>
            </div>
            <div className="user-second">
              <h2>{user.name}</h2>
              <p style={{ color: "grey" }}>{user.tagline}</p>
              <p style={{ fontSize: "small",marginTop:"3%" }}>
                {user.about}
              </p>
              <hr />
              <div>
                <h4>Skills:</h4>
                <div className="skills-div">
                  {user.skills.map(skill=>(
                    <p>{skill}</p>
                  ))}
                </div>
              </div>
              <hr />
              <div>
                <h4>Work Experience:</h4>
                <ul>
                  {user.workExperience.map(we=>(
                    <li>{we}</li>
                  ))}
                </ul>
              </div>
              <hr />
              <div>
                <h4>Projects:</h4>
                <ul>
                {user.projects.map(project=>(
                    <li>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="user-tab">
            <h3
              onClick={() => setActiveTab("posts")}
              style={{
                borderColor:
                  activeTab === "posts" ? "white" : "",
              }}
            >
              Posts
            </h3>
            <h3
              onClick={() => setActiveTab("followers")}
              style={{
                borderColor:
                  activeTab === "followers" ? "white" : "",
              }}
            >
              Followers
            </h3>
            <h3
              onClick={() => setActiveTab("following")}
              style={{
                borderColor:
                  activeTab === "following" ? "white" : "",
              }}
            >
              Following
            </h3>
          </div>
        </div>
        <div className="user-posts">
          {activeTab === "posts" ? (
            <div className="user-post-div">
              {userPosts.map((post) => (
                <LandingCard post={post} />
              ))}
            </div>
          ) : activeTab === "followers" ? (
            <div className="suggestions-main">
              {followers.map((user) => (
                <User user={user} remove={true} />
              ))}
            </div>
          ) : (
            <div className="suggestions-main">
              {following.map((user) => (
                <User user={user} remove={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Sub>
  );
}
