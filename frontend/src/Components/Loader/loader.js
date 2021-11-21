import React from "react";
import { useSelector , useDispatch } from "react-redux";
import "./loader.css";
import loader from './loader.svg';

export default function Loader(props) {
    const loading = useSelector(state => state.auth.loading)
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