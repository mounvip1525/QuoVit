import React from 'react'
import './css/EachCourseCard.css'
import downpng from './img/image 7.png'

export default function eachCourseCard() {
    return (
        <div className="paper">
            

            <div className="internals">
                <div className="year">2021</div>
                <button><img src={downpng} alt="" /></button>
            </div>
            <div className="finals">
            </div>

        </div>
    )
}
