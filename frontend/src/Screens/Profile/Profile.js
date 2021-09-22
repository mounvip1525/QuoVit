import React, { useState } from "react";
import MainLayout from "../../Components/Structure/Main";
import LandingCard from '../../Components/Cards/LandingCard'
import User from "../../Components/User/User";
import "./css/Profile.css";
import pencil from "./img/Pencil.png";
import bin from "./img/bin.png";
import avatar from "./img/avatar.png";
import { GitHub, Mail, Add } from "@material-ui/icons";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("posts");
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
    <MainLayout>
      <div className="profile-main">
        <div>
          <div className="user-profile">
            <img src={avatar} style={{ background: "black" }} alt="img" />
            <h3>Mounvi Podapati</h3>
            <p>3rd year CSE Undergrad</p>
          </div>
          <div className="user-contact">
            <div>
              <Mail />
              <h4>mounvip1525@gmail.com</h4>
            </div>
            <div>
              <GitHub />
              <h4>mounvip1525</h4>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="resume-btn">Resume</button>
          </div>
        </div>
        <div>
          <div className="user-tab">
            <h3 onClick={() => setActiveTab("posts")} style={{borderColor:activeTab === "posts" ? "var(--primary-color)" : ""}}>Posts</h3>
            <h3 onClick={() => setActiveTab("followers")} style={{borderColor:activeTab === "followers" ? "var(--primary-color)" : ""}}>Followers</h3>
            <h3 onClick={() => setActiveTab("following")} style={{borderColor:activeTab === "following" ? "var(--primary-color)" : ""}}>Following</h3>
          </div>
        </div>
        <div>
          {activeTab === "posts" ? (
            <div>
            {posts.map((post) => (
                <LandingCard
                  post={post}
                />
              ))
            }
            </div>
          ) : activeTab === "followers" ? (
            <div className="suggestions-main">
            {followers.map(user=>(
                <User user={user} remove={true}/>
            ))}
            </div>
          ) : (
            <div className="suggestions-main">
                {following.map(user=>(
                <User user={user} remove={true}/>
            ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
