import React from "react";
import { Clear } from "@material-ui/icons";
import "./Modal.css";

export default function Modal(props) {
  const { show, heading, closeModal } = props;
  const modalClass = show ? "modal display-block" : "modal display-none";
  return (
    <div className={modalClass}>
      <div className="modal-main">
        <h3>{heading} <button onClick={closeModal}><Clear /></button></h3>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
