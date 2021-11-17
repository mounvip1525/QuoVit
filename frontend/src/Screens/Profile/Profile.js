import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getPosts, profileDetails, updateProfileDetails } from "../../Actions/posts";
import MainLayout from "../../Components/Structure/Main";
import Sub from "../../Components/Structure/Sub";
import LandingCard from "../../Components/Cards/LandingCard";
import User from "../../Components/User/User";
import "./css/Profile.css";
import pencil from "./img/Pencil.png";
import bin from "./img/bin.png";
import avatar from "./img/avatar.png";
import { GitHub, Mail, Add, LinkedIn, WhatsApp, EditOutlined, ClearOutlined } from "@material-ui/icons";

export default function Profile() {
  const [userEdit,setUserEdit] = useState({
    proj:[],
    workExp:[],
    skil:[]
  })
  const [edit,setEdit]=useState(true)
  const dispatch = useDispatch();
  const {followers,following,currentUser,userPosts} = useSelector((state) => state.posts.profileDetails);
  console.log("profile details",useSelector((state) => state.posts.profileDetails));
  if(currentUser){
    var {name,profileImg,branch,campus,email,githubUsername,linkedIn,phoneNumber,workExperience,projects,about,skills,_id}=currentUser;
  }
  const handleEditClick = () => {
    setEdit(!edit);
    setUserEdit({proj:projects.join(","),workExp:workExperience.join(","),skil:skills.join(",")})
  }
  const handleEditChange = (e) => {
    setUserEdit({...userEdit,[e.target.name]:e.target.value})
  }
  const saveEdits = async () => {
    dispatch(updateProfileDetails(auth._id,_id,userEdit))
  }
  const auth = useSelector((state)=>state.auth)
  useEffect(() => {
    // dispatch(getPosts(auth._id));
    dispatch(profileDetails(auth._id))
  }, [dispatch,auth]);
  const [activeTab, setActiveTab] = useState("posts");
  const self = true;
  const user = 
    {
      name,
      tagline:`${branch} , VIT ${campus}`,
      about,
      skills,
      workExperience,
      projects,
      email,
      linkedIn,
      phoneNumber,
      githubUsername,
      // resume:"resume"
    }
  return (
    <Sub>
      {name ? 
      <div className="profile-main">
        <div className="edit-profile" onClick={handleEditClick}>
          {edit ? <EditOutlined /> : <ClearOutlined onClick={saveEdits} />}
        </div>
        <div>
          <div className="user-details">
            <div className="user-first">
              <img src={profileImg} style={{ background: "black" }} alt="img" />
              <div className="user-contact">
                <h4>Connect with me</h4>
                <div>
                  <Mail />
                  <p>{user.email}</p>
                </div>
                <div>
                  <LinkedIn />
                  <p>{user.linkedIn}</p>
                </div>
                <div>
                  <WhatsApp />
                  <p>{user.phoneNumber}</p>
                </div>
                <div>
                  <GitHub />
                  <p>{user.githubUsername}</p>
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
                {edit ? <div className="skills-div">
                  {user.skills.map(skill=>(
                    <p>{skill}</p>
                  ))}
                </div> : <input type="text" name="skil" className="edit-ip" value={userEdit.skil} onChange={handleEditChange} />}
              </div>
              <hr />
              <div>
                <h4>Work Experience:</h4>
                {edit ? <ul>
                  {user.workExperience.map(we=>(
                    <li>{we}</li>
                  ))}
                </ul>
                : <input type="text" name="workExp" className="edit-ip" value={userEdit.workExp} onChange={handleEditChange} />}
              </div>
              <hr />
              <div>
                <h4>Projects:</h4>
                {edit ? <ul>
                {user.projects.map(project=>(
                    <li>{project}</li>
                  ))}
                </ul>
                : <input type="text" name="proj" className="edit-ip" value={userEdit.proj} onChange={handleEditChange}/>}
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
                <LandingCard post={post} remove={true}/>
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
 : <div>No details found</div>}
    </Sub>
  );
}
