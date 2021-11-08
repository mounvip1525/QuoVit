import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import User from "../User/User.jsx";
import "./css/LandingCard.css";
import following from '../Cards/img/Follow.png'
import friends from '../Cards/img/Friends.png'
import up from '../Cards/img/up.png'
import down from '../Cards/img/down.png'
import comment from '../Cards/img/comment.png'
import savenow from '../Cards/img/save.png'
import saved from '../Cards/img/savedItem.png'
import pic from './img/1.png'
import { dislikePost, likePost, toggleSavePost } from "../../Actions/posts";

export default function LandingCard(props) {
  const { creator , caption , desc , likes , dislikes , img , _id } = props.post;
  // const save = props.saved;
  const [save,setSave] = useState(props.saved)
  const dispatch = useDispatch();
  const auth = useSelector((state)=>state.auth)
  const handleLikeClick = () => {
    dispatch(likePost(_id,auth._id));
  };
  const handleDislikeClick = () => {
    dispatch(dislikePost(_id,auth._id))
  }
  const handleSaveClick = () => {
    setSave(!save)
    dispatch(toggleSavePost(_id,auth._id))
  }
  const [follow, setFollow] = useState(true);
  const likeCircleColors = ["#91C196","#C5D226", "#F6E015","#DA6767"];
  let diff = likes.length - dislikes.length
  const bgcolor = diff >= 10 ? 0 : diff>= 5 ? 1 : diff>= 3 ? 2 : 3;
  return (
    <div className="landingCard">
      <User user={creator} />
      <h3>{caption}</h3>
      <div>
        <div>
          <p style={{fontSize:"small",color:"black"}}>{desc}</p>
        </div>
        {img &&        
        <div className="post-img">
          <img src={img} alt="pic" />
        </div>}
        <div className="lcs-div">
          <div>
          <img src={up} alt="upvote" onClick={handleLikeClick} />
          <div className="like-circle" style={{borderColor:likeCircleColors[bgcolor]}}>
            {diff}
          </div>
          <img src={down} alt="downvote" onClick={handleDislikeClick} />
          </div>
          <div>
            <img src={comment} alt="comments" style={{marginRight:"0.3rem"}}/>
            {/* <p>{comments}</p> */}
            <p>5kk</p>
          </div>
          <div>
            <img src={save ? saved : savenow} alt="save" style={{marginRight:"0.3rem"}} onClick={handleSaveClick} />
            <p>{save ? "Saved" : "Save"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}



