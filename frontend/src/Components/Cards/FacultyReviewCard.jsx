import React from "react";
import {  useSelector } from "react-redux";
import "./css/FacultyReviewCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useHistory } from "react-router";
import PeopleIcon from '@mui/icons-material/People';

export default function FacultyReviewCard(props) {
  const history = useHistory();
  const { facultyName, numOfVotes, facultyCMRating,_id } = props.faculty;
  const auth = useSelector((state)=>state.auth)
  const rating = (facultyCMRating / numOfVotes).toFixed(1);
  const colors = ["#DD2929", "#E5664A", "#F6E015", "#71D8B3"];
  const color =
    rating >= 4
      ? colors[3]
      : rating >= 3.2
      ? colors[2]
      : rating >= 2.5
      ? colors[1]
      : colors[0];
  const handleClick = () => {
    if(auth._id){
      props.handleShow(_id,facultyName)
    } else {
      history.push("/Login")
    }
  }
  return (
    <div className={props.bg ? "fac-card fac-bg" : "fac-card"}>
      <div>
        <h3>{facultyName}</h3>
        <div>
          <div>
            {numOfVotes}
            <PeopleIcon
              style={{ marginLeft: "0.5rem", objectFit: "contain" }}
            />
          </div>
          <div className="fac-rate" onClick={handleClick}>Rate</div>
        </div>
      </div>
      <CircularProgressbar
        value={rating * 20}
        text={`${rating}/5`}
        styles={buildStyles({
          pathColor: color,
        })}
      />
    </div>
  );
}
