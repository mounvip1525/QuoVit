import { Add, Remove } from "@material-ui/icons";
import React , {useState} from "react";
import User from "../User/User.jsx";
import "./css/IdeaCard.css";

export default function IdeaCard(props) {
  const { title, description, link, email, user } = props.idea;
  const [show,setShow] = useState(false);
  return (
    <div className="ideaCard">
        <div onClick={()=>setShow(!show)}>
            {!show ? <Add className="idea-expand"/> : <Remove className="idea-expand" />}
        </div>
      <User user={user} />
      <h3>{title}</h3>
      {show && 
      <div>
          <p>{description}</p>
      {link && (
        <div>
          <p className="i-muted">Link:</p>
          <p>{link}</p>
        </div>
      )}
      {email && (
        <div>
          <p className="i-muted">Email:</p>
          <p>{email}</p>
        </div>
      )}</div>}
    </div>
  );
}
