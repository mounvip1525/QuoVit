import React, { useState } from "react";
import { connect , useDispatch , useSelector } from "react-redux";
import {addIdea} from '../../Actions/ideasBlock';
import Modal from "../../Components/ModalHOC/Modal";
import "./css/IdeasBlock.css";

const AddIdeaModal = ({ closeModal, showModal }) => {
  const dispatch = useDispatch();
const auth = useSelector((state) => state.auth);
  const [idea,setIdea] = useState({
    idea:"",
    desc:"",
    link:""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIdea(idea,auth._id))
    setIdea({
      idea:"",
      desc:"",
      link:""
    })
    closeModal()
  };
  const handleChange = (e) => {
    setIdea({...idea,[e.target.name]:e.target.value})
  };

  return (
    <Modal show={showModal} heading="Add Idea" closeModal={closeModal}>
      <form onSubmit={handleSubmit} className="login-form login-form-2">
        <div>
        <div>
            <label htmlFor="idea">Your Idea <span style={{color:"red"}}>*</span></label>
            <input
              type="text"
              id="idea"
              name="idea"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="desc">Description <span style={{color:"red"}}>*</span></label>
            <input
              type="text"
              id="desc"
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="link">Add relevent links</label>
              <input
                type="text"
                id="link"
                name="link"
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
    showModal: state.modal.showIdeaModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HideIdeaModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIdeaModal);
