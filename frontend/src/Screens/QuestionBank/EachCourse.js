import React from "react";
import MainLayout from "../../Components/Structure/Main";
import "./css/EachCourse.css";
import EachCourseCard from "../../Components/Cards/EachCourseCard";
import { useLocation } from "react-router";
import AddPaperModal from "./AddPaperModal";

export default function EachCourse() {
  const { query } = useLocation();
  const { name, papers, code } = query.props.course;

  return (
    <MainLayout type="questionBank">
      <AddPaperModal />
      <div className="eachcourse-cont">
      <div className="courseName">{name}</div>
      <div className="courseCode">{code}</div>
      <div className="exam">CAT 1 </div>
      <div className="cat1">
        {papers.cat1.length>0 ? 
        papers.cat1.map((paper) => (
            <EachCourseCard paper={paper} />
          )) : 
          <p style={{margin:"auto",fontSize:"small"}}>No papers found</p>}
      </div>
      <hr />
      CAT 2
      <div className="cat2">
      {papers.cat2.length>0 ? 
        papers.cat2.map((paper) => (
            <EachCourseCard paper={paper} />
          )) : 
          <p style={{margin:"auto",fontSize:"small"}}>No papers found</p>}
      </div>
      <hr />
      FAT
      <div className="cat2">
      {papers.fat.length>0 ? 
        papers.fat.map((paper) => (
            <EachCourseCard paper={paper} />
          )) : 
          <p style={{margin:"auto",fontSize:"small"}}>No papers found</p>}
      </div>
      </div>
    </MainLayout>
  );
}
