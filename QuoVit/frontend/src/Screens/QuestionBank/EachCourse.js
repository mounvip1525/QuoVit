import React, {useEffect} from "react";
import { getPapersByCourse } from "../../Actions/eachCourse"
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../Components/Structure/Main";
import "./css/EachCourse.css";
import EachCourseCard from "../../Components/Cards/EachCourseCard";
import { useHistory, useLocation } from "react-router";
import AddPaperModal from "./AddPaperModal";

export default function EachCourse() {
  const history = useHistory()
  const { query } = useLocation();
  const dispatch = useDispatch();
  const {courseName,courseCategory,cat1,cat2,fat} = useSelector((state) => state.eachCourse.eachCourse);
  useEffect(() => {
    if(query){
      dispatch(getPapersByCourse(query.props.course.courseName));
    } else {
      history.push("/Login")
    }
  },[dispatch,history,query]);
  return (
    <MainLayout type="questionBank">
      <AddPaperModal />
      <div className="eachcourse-cont">
      <div className="courseName">{courseName}</div>
      <div className="courseCode">{courseCategory}</div>
      <div className="exam">CAT 1 </div>
      <div className="cat1">
        {cat1 && cat1.length>0 ? 
        cat1.map((paper) => (
            <EachCourseCard paper={paper} courseName={courseName} />
          )) : 
          <p style={{margin:"auto",fontSize:"small"}}>No papers found</p>}
      </div>
      <hr />
      CAT 2
      <div className="cat2">
      {cat2 && cat2.length>0 ? 
        cat2.map((paper) => (
            <EachCourseCard paper={paper} courseName={courseName} />
          )) : 
          <p style={{margin:"auto",fontSize:"small"}}>No papers found</p>}
      </div>
      <hr />
      FAT
      <div className="cat2">
      {fat && fat.length>0 ? 
        fat.map((paper) => (
            <EachCourseCard paper={paper} courseName={courseName} />
          )) : 
          <p style={{margin:"auto",fontSize:"small"}}>No papers found</p>}
      </div>
      </div>
    </MainLayout>
  );
}
