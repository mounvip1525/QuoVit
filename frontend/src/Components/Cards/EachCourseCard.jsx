import React from 'react'
import './css/EachCourseCard.css'
import downpng from './img/image 7.png'

export default function eachCourseCard(props) {
    const {year,paper} = props.paper;
    return (
        <div className="paper">
            <div className="internals">
                <div className="year">{year}</div>
                <button><img src={downpng} alt="" /></button>
            </div>
            <div className="finals">
            </div>

        </div>
    )
}
