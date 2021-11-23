import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from '@material-ui/icons';
import './css/CourseCard.css'

export default function CourseCard(props) {
    const {courseName,courseCategory } = props.course;
    return (
        <div className={props.bg ? "co-Card colored-course" : "co-Card"}>
            <div className="course-head">
                <p>{courseCategory}</p>
                <Link to={{pathname:"/EachCourse",query:{props}}}><ChevronRight /></Link>
            </div>
            <h4>{courseName}</h4>
        </div>
    )
}


