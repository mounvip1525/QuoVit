import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../Components/Cards/CourseCard";
import MainLayout from "../../Components/Structure/Main";
import "./css/QuestionBank.css";
import srcpng from "./img/Search copy.png";

export default function QuestionBank() {
  const courses = [
    {
      id: 1,
      code:"CSE3002",
      name: "Data visualization",
      papers: {
        cat1: [
          { year: "2021", paper: "" },
          { year: "2020", paper: "" },
          { year: "2020", paper: "" },
        ],
        cat2: [
          { year: "2021", paper: "" },
          { year: "2020", paper: "" },
        ],
        fat: [{ year: "2021", paper: "" }],
      },
    },
    {
      id: 2,
      code:"CSE4019",
      name: "Internet and Web Programming",
      papers: {
        cat1: [{ year: "2021", paper: "" }],
        cat2: [
          { year: "2021", paper: "" },
          { year: "2020", paper: "" },
        ],
        fat: [
          { year: "2021", paper: "" },
          { year: "2020", paper: "" },
          { year: "2020", paper: "" },
        ],
      },
    },
    {
      id: 3,
      code:"CSE3002",
      name: "Data visualization2",
      papers: {
        cat1: [
          { year: "2021", paper: "" },
          { year: "2020", paper: "" },
          { year: "2020", paper: "" },
        ],
        cat2: [
          { year: "2021", paper: "" },
          { year: "2020", paper: "" },
        ],
        fat: [],
      },
    },
    {
        id: 4,
        code:"CSE3002",
        name: "Data visualization",
        papers: {
          cat1: [
            { year: "2021", paper: "" },
            { year: "2020", paper: "" },
            { year: "2020", paper: "" },
          ],
          cat2: [
            { year: "2021", paper: "" },
            { year: "2020", paper: "" },
          ],
          fat: [{ year: "2021", paper: "" }],
        },
      },
  ];
  return (
    <MainLayout>
      <div className="input-search">
        <input type="text" name="course" placeholder="Search Course..." />
        <img src={srcpng} alt="Go" />
      </div>
      <div className="course-container">
          {courses.map(course=>(
              <CourseCard course={course} />
          ))}
      </div>
    </MainLayout>
  );
}
