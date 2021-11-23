import React from "react";
import { useSelector } from "react-redux";
import "./loader.css";
import loader from './loader.svg';

export default function Loader() {
    const loading = useSelector(state => state.posts.loading)
    const modalClass = loading ? "modal3 display-block3" : "modal3 display-none3";
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