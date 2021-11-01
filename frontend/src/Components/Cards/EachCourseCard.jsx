import React from 'react'
import { downloadPaper } from "../../Actions/eachCourse"
import { useDispatch } from "react-redux";
import './css/EachCourseCard.css'
import downpng from './img/image 7.png'

const EachCourseCard = (props) => {
    const {year,_id} = props.paper;
    const {courseName} = props;
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(downloadPaper(courseName,_id));
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
