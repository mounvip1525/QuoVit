import React, {useEffect,useState} from "react";
import MainLayout from "../../Components/Structure/Main";
import search from "./img/Search.png";
import "./css/FacultyReview.css";
import FacultyReviewCard from "../../Components/Cards/FacultyReviewCard";
import AddFacultyModal from "./AddFacultyModal";
import { getFacultyReviews } from "../../Actions/facultyReviews"; 
import { useDispatch, useSelector } from "react-redux";
import RateFacultyModal from "./RateFacultyModal";
import { setLoading } from "../../Actions/auth";
import Search from "./Search";
import Loader from "../../Components/Loader/loader";

export default function FacultyReview() {
  const [rateShow,setRateShow] = useState(false);
  const [activeFaculty,setAcitveFaculty] = useState({id:"",name:""})
  const dispatch = useDispatch();
  const facultyReviews = useSelector((state) => state.facultyReviews);
  useEffect(() => {
    // dispatch(setLoading)
    dispatch(getFacultyReviews());
  }, [dispatch]);
  const handleRateShow = (id,name) => {
    setAcitveFaculty({id,name});
    setRateShow(true)
  }
  return (
    <MainLayout type="facultyReviews">
      <Search faculties={facultyReviews} />
      <AddFacultyModal />
      <RateFacultyModal showModal={rateShow} activeFaculty={activeFaculty} closeModal={()=>setRateShow(false)}/>
      {facultyReviews.length>0 ? <div className="fac-main">
        <div className="fac-cards">
          {facultyReviews.map((faculty) => (
            <FacultyReviewCard faculty={faculty} handleShow={handleRateShow}/>
          ))}
        </div>
      </div> : <Loader />}
    </MainLayout>
  );
}
