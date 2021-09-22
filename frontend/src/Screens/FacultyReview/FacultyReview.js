import React from 'react'
import MainLayout from '../../Components/Structure/Main'
import search from './img/Search.png'
import './css/FacultyReview.css'
import FacultyReviewCard from '../../Components/Cards/FacultyReviewCard'

export default function FacultyReview() {
    const faculties = [
        {
            id:1,
            name:"Mounvi Podapati",
            votes:"20",
            rating:"4.5"
        },
        {
            id:1,
            name:"Mounvi Podapati",
            votes:"20",
            rating:"3.2"
        },
        {
            id:1,
            name:"Mounvi Podapati",
            votes:"20",
            rating:"1"
        },
        {
            id:1,
            name:"Mounvi Podapati",
            votes:"20",
            rating:"2.5"
        },
        {
            id:1,
            name:"Mounvi Podapati",
            votes:"20",
            rating:"3.7"
        },
        {
            id:1,
            name:"Mounvi Podapati",
            votes:"20",
            rating:"5"
        },
    ]
    return (
            <MainLayout>
            <div className="fac-main">
                <div className="input-search">
                    <input type="text" name="faculty" placeholder="Search Faculty..."/>
                    <img src={search} alt="Go" />
                </div>
                <div className="fac-cards">
                    {faculties.map(faculty=>(
                        <FacultyReviewCard faculty={faculty} />
                    ))}
                </div>
            </div>
            </MainLayout>
    )
}
