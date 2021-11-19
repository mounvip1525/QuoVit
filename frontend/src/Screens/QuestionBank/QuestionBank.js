import React , { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../Components/Cards/CourseCard";
import MainLayout from "../../Components/Structure/Main";
import AddPaperModal from "./AddPaperModal";
import { getCourses } from "../../Actions/questionBank";
import "./css/QuestionBank.css";
import srcpng from "./img/Search copy.png";

export default function QuestionBank() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.questionBank);
  console.log("courses",courses)
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  return (
    <MainLayout type="questionBank">
      <AddPaperModal />
      <div className="input-search">
        <input type="text" name="course" placeholder="Search Course..." />
        <img src={srcpng} alt="Go" />
      </div>
      <div className="course-container">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </MainLayout>
  );
}
