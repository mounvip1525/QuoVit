import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/Confessions.css";

const AddConfession = ({ closeModal, showModal }) => {
  const [confessionNew, setConfessionNew] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(confessionNew);
    closeModal()
  };
  const handleChange = (e) => {
    setConfessionNew(e.target.value);
  };

  return (
    <Modal show={showModal} heading="Add Confession" closeModal={closeModal}>
      <form onSubmit={handleSubmit} className="login-form login-form-2">
        <div>
          <div>
            <label>Share your confessions</label>
            <textarea
              onChange={handleChange}
              className="confession-textarea"
            />
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
    showModal: state.modal.showConfessModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HideConfessModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddConfession);
