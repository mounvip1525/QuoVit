import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
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
import { addComment, deletePost, dislikePost, likePost, toggleSavePost } from "../../Actions/posts";
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CommentIcon from '@mui/icons-material/Comment';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { Send, TurnedIn } from "@material-ui/icons";
import Empty from "../Empty/Empty.js";

export default function LandingCard(props) {
  const history = useHistory()
  const [fullText,setFullText] = useState(true)
  const [showComments,setShowComments] = useState(false)
  const [comment,setComment] = useState("")
  const { creator , caption , desc , likes , dislikes , img , _id, comments } = props.post;
  console.log(props.post)
  const [save,setSave] = useState(props.saved)
  const dispatch = useDispatch();
  const auth = useSelector((state)=>state.auth)
  const handleLikeClick = () => {
    if(auth._id){
      dispatch(likePost(_id,auth._id));
    } else {
      history.push("/Login")
    }
  };
  const handleDislikeClick = () => {
    if(auth._id){
      dispatch(dislikePost(_id,auth._id));
    } else {
      history.push("/Login")
    }
  }
  const handleSaveClick = () => {
    if(auth._id){
      setSave(!save)
      dispatch(toggleSavePost(_id,auth._id))
    } else {
      history.push("/Login")
    }
  }
  const handleDelete = () => {
      dispatch(deletePost(_id,auth._id))
  }
  const handleCommentClick = () => {
    setShowComments(!showComments)
  }
  const postComment = () => {
    if(!auth._id){
      history.push("/Login")
    } else if(!comment) {
      document.getElementById("comment").focus()
    } else {
      dispatch(addComment(_id,auth._id,comment))
    }
setComment("")
  }
  const [follow, setFollow] = useState(true);
  const likeCircleColors = ["#91C196","#C5D226", "#F6E015","#DA6767"];
  let diff = likes.length - dislikes.length
  const bgcolor = diff >= 10 ? 0 : diff>= 5 ? 1 : diff>= 3 ? 2 : 3;
  return (
    <div className="landingCard">
      {props.remove && <div className="bin-post"><DeleteIcon onClick={handleDelete}/></div>}
      <User user={creator} />
      <h3>{caption}</h3>
      <div>
        <div className="desc-div">
          {(desc.length>200 && fullText) ? 
              <p style={{fontSize:"small"}}>{desc.substring(0,200)} &nbsp;<span onClick={()=>{setFullText(false);console.log("hello")}}>More</span></p> :
              <p style={{fontSize:"small"}}>{desc}</p> 
          }
        </div>
        {img &&        
        <div className="post-img">
          <img src={img} alt="pic" />
        </div>}
        <div className="lcs-div">
          <div>
          <ArrowDropUpIcon onClick={handleLikeClick} />
          <div className="like-circle" style={{borderColor:likeCircleColors[bgcolor]}}>
            {diff}
          </div>
          <ArrowDropDownIcon onClick={handleDislikeClick} />
          </div>
          <div>
            <CommentIcon style={{marginRight:"0.3rem"}} onClick={handleCommentClick}/>
            {/* <p>{comments}</p> */}
            <p>{comments.length}</p>
          </div>
          <div>
            {save ? 
            <TurnedIn style={{marginRight:"0.3rem"}} onClick={handleSaveClick} /> : 
            <TurnedInNotIcon style={{marginRight:"0.3rem"}} onClick={handleSaveClick} />}
            <p>{save ? "Saved" : "Save"}</p>
          </div>
        </div>
      </div>
      {showComments && 
      <div className="comment-box">
        <div>
          <input type="text" name="comment" id="comment" className="edit-ip" placeholder="Add your comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
          <button onClick={postComment}><Send /></button>
        </div>
        <div>
        {comments.length > 0 ? comments.map(c=> <User user={c} />) : <Empty msg="Be the first one to comment" index={4} small={true}/>}
        </div>
      </div>}
    </div>
  );
}



