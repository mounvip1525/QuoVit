import React from "react";
import { useDispatch , useSelector } from "react-redux";
import person from "./img/person.png";
import "./css/FacultyReviewCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useHistory } from "react-router";

export default function FacultyReviewCard(props) {
  const history = useHistory();
  const { facultyName, numOfVotes, facultyCMRating,_id } = props.faculty;
  const auth = useSelector((state)=>state.auth)
  // console.log("faculty",props.faculty)
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
  // const color = colors[0];
  const handleClick = () => {
    if(auth._id){
      props.handleShow(_id,facultyName)
    } else {
      history.push("/Login")
    }
  }
  return (
    <div className="fac-card">
      <div>
        <h3>{facultyName}</h3>
        <div>
          <div>
            {numOfVotes}
            <img
              style={{ marginLeft: "0.5rem", objectFit: "contain" }}
              src={person}
              alt=""
            />
          </div>
          <div className="fac-rate" onClick={handleClick}>Rate</div>
        </div>
      </div>
      <CircularProgressbar
        value={rating * 20}
        text={`${rating}/5`}
        styles={buildStyles({
          textColor: "black",
          pathColor: color,
          trailColor: "#C4C4C4",
        })}
      />
    </div>
  );
}
