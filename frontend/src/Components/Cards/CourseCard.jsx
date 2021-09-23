import React from 'react'
import './css/CourseCard.css'
import img from "./img/Vector (1).png"
import { Link } from 'react-router-dom'

export default function CourseCard(props) {
    const {c_name,c_type } = props.course;
    return (
        <Link to="/Eachcourse"style={{color: 'inherit', textDecoration: 'inherit'}}>
        {/* <Link
            to={{
                pathname: "/Eachcourse",
                state: { c_type: {c_type} }
            }}> */}
        <div className='co-Card'>
            <div className="coursetype">
                {c_type}
            </div>
            <div className="expand">
            <button><img src={img} alt=""/></button>
            </div>
        <div className="c-name">
            Data Visualization 
    return (
        <div>
            {props.name} 
            {/* <h4>{props.age}</h4> */}
        </div>
        </div>
        </Link>
    )
}


