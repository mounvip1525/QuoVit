import React, { useState } from "react";
import User from "../User/User.jsx";
import "./css/LandingCard.css";
import following from '../Cards/img/Follow.png'
import friends from '../Cards/img/Friends.png'
import up from '../Cards/img/up.png'
import down from '../Cards/img/down.png'
import comment from '../Cards/img/comment.png'
import savenow from '../Cards/img/save.png'
import saved from '../Cards/img/savedItem.png'

export default function LandingCard(props) {
  const { title, description, likes, comments, user , id, save } = props.post;
  const [follow, setFollow] = useState(true);
  const likeCircleColors = ["#91C196","#C5D226", "#F6E015","#DA6767"];
  const bgcolor = likes >= 10 ? 0 : likes>= 5 ? 1 : likes>= 3 ? 2 : 3;
  return (
    <div className="landingCard">
      <div onClick={() => setFollow(!follow)}>
        {!follow ? (
          <img src={following} alt="Follow"
            style={{
              position: "absolute",
              top: "5%",
              right: "3%",
              height:"3rem"
            }}
          />
        ) : (
          <img src={friends} alt="Friends"
            style={{
              position: "absolute",
              top: "5%",
              right: "3%",
              height:"3rem"
            }}
          />
        )}
      </div>
      <User user={user} />
      <h3>{title}</h3>
      <div>
        <div>
          <p style={{fontSize:"small",color:"black"}}>{description}</p>
        </div>
        <div className="lcs-div">
          <div>
          <img src={up} alt="upvote" onClick={()=>props.onLikeClick(id,1)}/>
          <div className="like-circle" style={{borderColor:likeCircleColors[bgcolor]}}>
            {likes}
          </div>
          <img src={down} alt="downvote" onClick={()=>props.onLikeClick(id,-1)}/>
          </div>
          <div>
            <img src={comment} alt="comments" style={{marginRight:"0.3rem"}}/>
            <p>{comments}</p>
          </div>
          <div>
            <img src={save ? saved : savenow} alt="save" style={{marginRight:"0.3rem"}} onClick={()=>props.onSaveClick(id)} />
            <p>{save ? "Saved" : "Save"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
