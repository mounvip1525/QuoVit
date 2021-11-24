import React from "react";
import { useSelector } from "react-redux";
import "./loader.css";
import loader from './loader.svg';

export default function Loader({load}) {
    const loading1 = useSelector(state => state.posts.loading)
    const loading2 = useSelector(state => state.confessions.loading)
    const loading3 = useSelector(state => state.ideas.loading)
    const loading4 = useSelector(state => state.questionBank.loading)
    const loading5 = useSelector(state => state.eachCourse.loading)
    const loading6 = useSelector(state => state.facultyReviews.loading)
    console.log(loading1,loading2,loading3,loading4,loading5,loading6)
    const modalClass = loading1 || loading2 || loading3 || loading4 || loading5 || loading6 || load ? "modal3 display-block3" : "modal3 display-none3";
    return (
        <div>
            <div className={modalClass}>
                <div className="modal-main3">
                    <h3><img src={loader} alt="Updating your changes" /></h3>
                </div>
            </div>
        </div>
    )
};