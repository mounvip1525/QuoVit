import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {addFaculty} from '../../Actions/facultyReviews';
import Modal from "../../Components/ModalHOC/Modal";
import "./css/FacultyReview.css";

const AddFacultyModal = ({ closeModal, showModal }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [faculty,setFaculty] = useState({facultyName:"",facultyRating:""})
  const handleSubmit = (e) => {
    e.preventDefault();
    setFaculty({facultyName:"",facultyRating:0})
    dispatch(addFaculty(faculty,auth._id))
    closeModal();
  };
  const handleChange = (e) => {
    setFaculty({...faculty,[e.target.name]:e.target.value})
  };

  return (
    <Modal show={showModal} heading="Add Faculty" closeModal={closeModal}>
      <form onSubmit={handleSubmit} className="login-form login-form-2">
        <div>
          <div>
            <label htmlFor="facultyName">Faculty Name</label>
            <input
              type="text"
              id="facultyName"
              name="facultyName"
              value={faculty.facultyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="facultyRating">Rate</label><br/>
            <input
              type="number"
              min="1"
              max="5"
              id="facultyRating"
              name="facultyRating"
              value={faculty.facultyRating}
              onChange={handleChange}
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
    showModal: state.modal.showFacultyModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HideFacultyModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFacultyModal);
