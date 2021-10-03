import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/FacultyReview.css";

const AddFacultyModal = ({ closeModal, showModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log your state here to check final values
    closeModal()
  };
  const handleChange = (e) => {
    //Add your state changes here
  };

  return (
    <Modal show={showModal} heading="Add Faculty" closeModal={closeModal}>
      <form onSubmit={handleSubmit} className="login-form login-form-2">
        <div>
            {/* Add your html code here */}
            <div>
                    <label htmlFor="email">VIT Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange}/>
                </div>
          <button type="submit" className="login-btn add-btn">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.showFacultyModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HideFacultyModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFacultyModal);
