import React from 'react'
import { useHistory } from "react-router-dom"
import { downloadPaper } from "../../Actions/eachCourse"
import { useDispatch , useSelector } from "react-redux";
import './css/EachCourseCard.css'
import downpng from './img/image 7.png'

const EachCourseCard = (props) => {
  const history = useHistory();
  const auth = useSelector((state)=>state.auth)
    const {year,_id} = props.paper;
    const {courseName} = props;
    const dispatch = useDispatch();
    const handleClick = () => {
      if(auth._id){
        dispatch(downloadPaper(auth._id,courseName,_id));
      } else {
        history.push("/Login")
      }
    };
    return (
        <div className="paper">
            <div className="internals">
                <div className="year">{year}</div>
                <button onClick={handleClick}><img src={downpng} alt="" /></button>
            </div>
            <div className="finals">
            </div>

        </div>
    )
}
export default EachCourseCard;
