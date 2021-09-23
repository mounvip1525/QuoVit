import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../../Components/Cards/CourseCard'
import MainLayout from '../../Components/Structure/Main'
import './css/QuestionBank.css'
import srcpng from './img/search.png'
// import CourseCard from '../../Components/Cards/CourseCard'

export default function QuestionBank() {
    const courses=[
        {
            id:1,
            c_type:"UC",
            c_name:"Data visualization"},
        {
            id:2,
            c_type:"UC",
            c_name:"Data visualization" 
            
        },
        {
            id:3,
            c_type:"UC",
            c_name:"Data visualization" 
            
        },
    ]
    //Adarsh check the folder Ideas Block to understand the mappings if u dont understand message me, I'll explain! 
    return (
            <MainLayout>
                <div className="searchBar">
                    <input type="text" className="searchTerm" placeholder="What subject are you searching for?"/>
                    <button type="submit" className="searchButton"><img src={srcpng} alt=""/></button>
                </div>
                   <div className="courses">
                       <div className="c-1">
                        {/* <Link to="/Eachcourse"style={{color: 'inherit', textDecoration: 'inherit'}}> */}
                        {courses.map(course=>(
                            <CourseCard course={course} />
                                         ))}
                        {/* </Link> */}
                       </div>
                       <div className="c-2">
                       {/* <Link to="/Eachcourse" style={{color: 'inherit', textDecoration: 'inherit'}}> */}
                      
                       {courses.map(course=>(
                            <CourseCard course={course} />
                                         ))}
                       {/* </Link> */}
                           
                       </div>
                    </div>
              
            </MainLayout>     
    )
}
