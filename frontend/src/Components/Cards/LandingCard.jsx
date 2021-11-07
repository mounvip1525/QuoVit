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
  console.log(props.post)
  const { creator , caption , desc , likes , dislikes , img } = props.post;
  const [follow, setFollow] = useState(true);
  const likeCircleColors = ["#91C196","#C5D226", "#F6E015","#DA6767"];
  let diff = likes.length - dislikes.length
  const bgcolor = diff >= 10 ? 0 : diff>= 5 ? 1 : diff>= 3 ? 2 : 3;
  return (
    <div className="landingCard">
      {/* <div onClick={() => setFollow(!follow)}>
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
      </div> */}
      <User user={creator} />
      <h3>{caption}</h3>
      <div>
        <div>
          <p style={{fontSize:"small",color:"black"}}>{desc}</p>
        </div>
        <div className="lcs-div">
          <div>
          {/* <img src={up} alt="upvote" onClick={()=>props.onLikeClick(id,1)}/> */}
          <img src={up} alt="upvote" />
          <div className="like-circle" style={{borderColor:likeCircleColors[bgcolor]}}>
            {likes.length-dislikes.length}
          </div>
          {/* <img src={down} alt="downvote" onClick={()=>props.onLikeClick(id,-1)}/> */}
          <img src={down} alt="downvote" />
          </div>
          <div>
            <img src={comment} alt="comments" style={{marginRight:"0.3rem"}}/>
            {/* <p>{comments}</p> */}
            <p>5kk</p>
          </div>
          <div>
            {/* <img src={save ? saved : savenow} alt="save" style={{marginRight:"0.3rem"}} onClick={()=>props.onSaveClick(id)} />
            <p>{save ? "Saved" : "Save"}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}



