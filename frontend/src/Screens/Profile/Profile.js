import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("posts");
  const self = true;
  const user = 
    {
      name:"Mounvi Podapati",
      designation:"3rd year CSE Undergrad",
      about:"Voluptate dolor est culpa quis Lorem ut minim consectetur magna magna consectetur sint.",
      skills:["react","frontend","backend"],
      workExperience:["Pariatur exercitation Lorem commodo eu culpa.","Elit enim consequat exercitation cillum ipsum magna laborum."],
      projects:["Pariatur exercitation Lorem commodo eu culpa.","Elit enim consequat exercitation cillum ipsum magna laborum."],
      mail:"munvip1525@gmail.com",
      linkedin:"mounvip1525/123456",
      whatsapp:"+91 9787774567",
      github:"mounvip1525",
      resume:"resume"
    }
  const posts = [
    {
      id: 0,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      likes: 11,
      comments: "5k",
      save: false,
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "purple",
      },
    },
    {
      id: 1,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      likes: 5,
      comments: 10,
      save: false,
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "purple",
      },
    },
    {
      id: 2,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      likes: 3,
      comments: "25",
      save: true,
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "purple",
      },
    },
    {
      id: 3,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      likes: 1,
      comments: 0,
      save: false,
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "purple",
      },
    },
  ];
  const followers = [
    {
      id: 1,
      name: "Mounvi Podapati",
      designation: "3rd Year CSE,VIT Vellore",
      img: avatar,
      background: "red",
    },
    {
      id: 2,
      name: "Mounvi Podapati",
      designation: "3rd Year CSE,VIT Vellore",
      img: avatar,
      background: "green",
    },
    {
      id: 3,
      name: "Mounvi Podapati",
      designation: "3rd Year CSE,VIT Vellore",
      img: avatar,
      background: "yellow",
    },
    {
      id: 4,
      name: "Mounvi Podapati",
      designation: "3rd Year CSE,VIT Vellore",
      img: avatar,
      background: "purple",
    },
    {
      id: 5,
      name: "Mounvi Podapati",
      designation: "3rd Year CSE,VIT Vellore",
      img: avatar,
      background: "black",
    },
  ];
  const following = [
    {
      id: 1,
      name: "Mounvi Podapati",
      designation: "3rd Year CSE,VIT Vellore",
      img: avatar,
      background: "red",
    },
  ];
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
            <button className="resume-btn">Resume</button>
          </div>
              </div>
            </div>
            <div className="user-second">
              <h2>{user.name}</h2>
              <p style={{ color: "grey" }}>{user.designation}</p>
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
              {posts.map((post) => (
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
