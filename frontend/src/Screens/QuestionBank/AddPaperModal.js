import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/QuestionBank.css";

const AddPaperModal = ({ closeModal, showModal }) => {
  const [paper, setPaper] = useState({
    courseName: "",
    courseCode: "",
    year: "",
    paper: "",
    type: "cat1",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(paper);
    const data = new FormData();
    data.append("paper", paper);
    // data.append("")
    axios({
      method: "POST",
      url: "http://localhost:8000/upload",
      data: data,
    }).then((res) => {       
        alert(res);
    });
  };
    e.target.reset();
    setPaper({
      courseName: "",
      courseCode: "",
      year: "",
      paper: "",
      type: "cat1",
    });
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
      <form onSubmit={handleSubmit} className="login-form login-form-2">
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
            <label htmlFor="courseCode">Course Code</label>
            <input
              type="text"
              id="courseCode"
              name="courseCode"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              max="20999"
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
            <input type="radio" name="type" value="cat1" />
            <label>Cat 1</label>
            <input type="radio" name="type" value="cat2" />
            <label>Cat 2</label>
            <input type="radio" name="type" value="fat" />
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
