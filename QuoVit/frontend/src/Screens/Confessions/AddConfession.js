import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addConfession } from '../../Actions/confessions'
import Modal from "../../Components/ModalHOC/Modal";
import "./css/Confessions.css";

const AddConfession = ({ closeModal, showModal }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state)=>state.auth)
  const [confession, setConfession] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(confession);
    dispatch(addConfession(auth._id,confession))
    setConfession("")
    closeModal()
  };
  const handleChange = (e) => {
    setConfession(e.target.value);
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
              value={confession}
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
