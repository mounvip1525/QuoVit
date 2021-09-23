import React from 'react'
import MainLayout from '../../Components/Structure/Main'
import './css/EachCourse.css'
import EachCourseCard from '../../Components/Cards/EachCourseCard';
import { useLocation } from 'react-router';

export default function EachCourse() {
    // const location=useLocation()
    // const {c_type}=location.state

    return (
        <MainLayout>
            <div className="courseName">Coursename</div>
            <div className="courseType">UC</div>
            <div className="exam">CAT 1 </div> 
            <div className="cat1">   
                <div className="c1">
                <EachCourseCard></EachCourseCard>
                <EachCourseCard></EachCourseCard>
                </div>
                <div className="c2">
                <EachCourseCard></EachCourseCard>
                </div>
                <div className="c3">
                <EachCourseCard></EachCourseCard>
                </div>
           
            </div> 
            <hr />
            CAT 2
            <div className="cat2">   
                <div className="c1">
                <EachCourseCard></EachCourseCard>
                </div>
                <div className="c2">
                <EachCourseCard></EachCourseCard>
                </div>
                <div className="c3">
                <EachCourseCard></EachCourseCard>
                </div>
            </div>
            <hr />
            FAT 
            <div className="cat2">   
                <div className="c1">
                </div>
                <div className="c2">
                </div>
                <div className="c3">
                </div>
            </div>
        </MainLayout>
    )
}
