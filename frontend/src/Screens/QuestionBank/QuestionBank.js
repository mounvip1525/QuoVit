import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../Components/Cards/CourseCard";
import MainLayout from "../../Components/Structure/Main";
import AddPaperModal from "./AddPaperModal";
import { getCourses } from "../../Actions/questionBank";
import Search from "./Search";
import "./css/QuestionBank.css";

export default function QuestionBank() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.questionBank);
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
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
