import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { rateFaculty } from "../../Actions/facultyReviews";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/FacultyReview.css";

export default function RateFacultyModal({
  closeModal,
  showModal,
  activeFaculty,
}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [rating, setRating] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(rateFaculty(auth._id,activeFaculty.id, rating));
    setRating("")
    closeModal();
  };
  const handleChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <Modal
      show={showModal}
      heading={activeFaculty.name}
      closeModal={closeModal}
    >
      <form onSubmit={handleSubmit} className="login-form login-form-2">
        <div>
          <div>
            <label htmlFor="facultyRating">Rate</label>
            <br />
            <input
              type="number"
              min="1"
              max="5"
              id="facultyRating"
              name="facultyRating"
              value={rating}
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
}
