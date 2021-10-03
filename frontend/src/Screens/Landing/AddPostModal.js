import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/Landing.css";

const AddPostModal = ({ closeModal, showModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log
    closeModal()
  };
  const handleChange = (e) => {
    //handle state change
  };

  return (
    <Modal show={showModal} heading="Add Post" closeModal={closeModal}>
      <form onSubmit={handleSubmit} className="login-form login-form-2">
        <div>
            {/* Add your html code here */}
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
    showModal: state.modal.showPostModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HidePostModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostModal);
