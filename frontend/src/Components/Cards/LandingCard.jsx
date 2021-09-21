import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import React, { useState } from "react";
import User from "../User/User.jsx";
import "./css/LandingCard.css";

export default function LandingCard(props) {
  const { title, description, likes, comments, user } = props.post;
  const [follow, setFollow] = useState(true);
  return (
    <div className="landingCard">
      <div onClick={() => setFollow(!follow)}>
        {!follow ? (
          <GroupOutlinedIcon
            style={{
              position: "absolute",
              top: "5%",
              right: "5%",
              fontSize: 30,
            }}
          />
        ) : (
          <PersonAddOutlinedIcon
            style={{
              position: "absolute",
              top: "5%",
              right: "5%",
              fontSize: 30,
            }}
          />
        )}
      </div>
      <User user={user} />
      <h3>{title}</h3>
      <div>
        <div>
          <p className="i-muted">Description:</p>
          <p>{description}</p>
        </div>
        <div>
          <div
            className="likecircle"
            // onClick={props.onLikeIncrement(props.post)}
          >
            {likes}
          </div>
          <ModeCommentOutlinedIcon
            style={{ position: "relative", fontSize: 30, top: 6 }}
          ></ModeCommentOutlinedIcon>
          &nbsp;{comments}
        </div>
      </div>
    </div>
  );
}
