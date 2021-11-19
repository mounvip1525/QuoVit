import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { connect } from "react-redux";
import { uploadPaper } from "../../Actions/questionBank";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/QuestionBank.css";

const AddPaperModal = ({ closeModal, showModal }) => {
  const dispatch = useDispatch();
const auth = useSelector((state) => state.auth);
  const [paper, setPaper] = useState({
    courseName: "",
    courseCategory: "PC",
    year: "",
    paper: "",
    examType: "cat1",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("file", paper.paper);
    dispatch(uploadPaper(auth._id,paper.courseName,paper.courseCategory,paper.examType,paper.year,formdata))
    closeModal();
  };
  const handleChange = (e) => {
    setPaper({ ...paper, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setPaper({ ...paper, paper: e.target.files[0] });
  };

  return (
    <Modal show={showModal} heading="Add Paper" closeModal={closeModal}>
      <form onSubmit={handleSubmit} className="login-form login-form-2" encType="multipart/form-data">
        <div className="upload-cls">
          <div>
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="courseCode">Course Category</label><br />
            <select name="courseCategory" id="courseCategory" onChange={handleChange}>
              <option value="PC">PC</option>
              <option value="UC">UC</option>
              <option value="PE">PE</option>
              <option value="UE">UE</option>
            </select>
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              min="2000"
              step="1"
              id="year"
              name="year"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="paper">Upload Paper</label>
            <input
              type="file"
              id="paper"
              name="paper"
              onChange={handleFileChange}
            />
          </div>
          <div className="input-radios" onChange={handleChange}>
            <input type="radio" name="examType" value="cat1" />
            <label>Cat 1</label>
            <input type="radio" name="examType" value="cat2" />
            <label>Cat 2</label>
            <input type="radio" name="examType" value="fat" />
            <label>Fat</label>
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
    showModal: state.modal.showPaperModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HidePaperModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPaperModal);
