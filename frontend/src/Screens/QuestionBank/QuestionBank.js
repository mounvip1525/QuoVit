import React , { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../Components/Cards/CourseCard";
import MainLayout from "../../Components/Structure/Main";
import AddPaperModal from "./AddPaperModal";
import { getCourses } from "../../Actions/questionBank";
import "./css/QuestionBank.css";
import { setLoading } from "../../Actions/auth";
import Search from "./Search";

export default function QuestionBank() {
  const dispatch = useDispatch();
  const [sCourse,setScourse] = useState()
  const courses = useSelector((state) => state.questionBank);
  const [search,setSearch] = useState("")
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  //   console.log(courses)
  //   courses.map(c=>{
  //     // if(c.courseName.includes(search)){
  //     //   console.log("search",c,search)
  //     // }
  //   //   search.some((newItem) => {
  //   //     return (
  //   //         item[newItem]
  //   //             .toString()
  //   //             .toLowerCase()
  //   //             .indexOf(q.toLowerCase()) > -1
  //   //     );
  //   //   })
  //   // })
  }
  const handleSearchClick = () => {
    console.log(search,sCourse)
  }
  console.log("courses",courses)
  useEffect(() => {
    // dispatch({ type: "SET_LOADING" })
    dispatch(setLoading)
    dispatch(getCourses());
  }, [dispatch]);
  let sample = {
    courseName:"hello",
    courseCategory:"12"
  }
  return (
    <MainLayout type="questionBank">
      <AddPaperModal />
      <Search courses={courses} />
      <div className="course-container">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </MainLayout>
  );
}
