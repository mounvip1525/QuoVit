import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/IdeasBlock.css";

const AddIdeaModal = ({ closeModal, showModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log
    closeModal()
  };
  const handleChange = (e) => {
    //handle state change
  };

  return (
    <Modal show={showModal} heading="Add Idea" closeModal={closeModal}>
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
    showModal: state.modal.showIdeaModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HideIdeaModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIdeaModal);
