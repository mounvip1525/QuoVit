import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../../Components/Structure/Main'
import './css/QuestionBank.css'
import CourseCard from '../../Components/Cards/CourseCard'

export default function QuestionBank() {
    //Adarsh check the folder Ideas Block to understand the mappings if u dont understand message me, I'll explain! 
    const Courses = [
        {
            id:1,
            name:"DV",
            age:"18"
        },
        {
            id:2,
            name:"IWP"
        },
        {
            id:3,
            name:"PDC"
        }
    ]
    return (
            <MainLayout>
                <Link to="/EachCourse">
                    {Courses.map(mounvi=>(
                        <CourseCard name={mounvi.name} age={mounvi.age}/>
                    ))}
                        {/* <CourseCard name="DV"/>
                        <CourseCard name="IWP"/>
                        <CourseCard name="PDC"/>
                        <CourseCard name="isaa"/>
                        <CourseCard name="ala"/> */}
                </Link>
                
            </MainLayout>     
    )
}
