import React from 'react'
import './css/CourseCard.css'
import { Link } from 'react-router-dom'
import { ChevronRight } from '@material-ui/icons';

export default function CourseCard(props) {
    const {name,code } = props.course;
    return (
        <div className='co-Card'>
            <div className="course-head">
                <p>{code}</p>
                <Link to={{pathname:"/EachCourse",query:{props}}}><ChevronRight /></Link>
            </div>
            <h4>{name}</h4>
        </div>
    )
}


