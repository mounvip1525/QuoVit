import React , {useState} from "react";
import User from "../User/User.jsx";
import { Add, Remove } from "@material-ui/icons";
import "./css/IdeaCard.css";

export default function IdeaCard(props) {
  const { idea, desc, link, creator } = props.idea;
  const [show,setShow] = useState(false);
  return (
    <div className="ideaCard">
        <div onClick={()=>setShow(!show)}>
            {!show ? <Add className="idea-expand idea-add"/> : <Remove className="idea-expand" />}
        </div>
      <User user={creator} />
      <h3>{idea}</h3>
      {show && 
      <div>
          <div>
          <p className="i-muted">Description:</p>
          <p>{desc}</p>
          </div>
      {link && (
        <div>
          <p className="i-muted">Link:</p>
            <p className="link-card"> {link}</p>
        </div>
      )}
      </div>}
    </div>
  );
}
