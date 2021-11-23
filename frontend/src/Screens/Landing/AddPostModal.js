import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addPost } from "../../Actions/posts";
import Modal from "../../Components/ModalHOC/Modal";
import "./css/Landing.css";

const AddPostModal = ({ closeModal, showModal }) => {
  const state = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [post,setPost] = useState({caption:"",desc:"",img:"",isPublic:false})
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post,state._id))
    setPost({caption:"",desc:"",img:"",isPublic:false})
    closeModal()
  };
  const handleChange = (e) => {
    setPost({...post,[e.target.name]:e.target.value})
  };
  const handleImgChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPost({ ...post, img: base64 })
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <Modal show={showModal} heading="Add Post" closeModal={closeModal}>
      <form onSubmit={handleSubmit} className="login-form login-form-2">
        <div>
            <div>
                <label htmlFor="caption">Caption <span style={{ color: "red" }}>*</span></label>
                <input
                  type="text"
                  id="caption"
                  name="caption"
                  onChange={handleChange}
                  value={post.caption}
                />
              </div>
              <div>
                <label htmlFor="desc">Description<span style={{ color: "red" }}>*</span></label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  onChange={handleChange}
                  value={post.desc}
                />
              </div>
              <div>
                <label htmlFor="img">Choose relevent photo (if any)</label>
                <input
                  type="file"
                  id="mg"
                  name="mg"
                  onChange={handleImgChange}
                />
              </div>
              <div>
                <label htmlFor="isPublic">Post it to:</label>
                <select name="isPublic" id="isPublic" onChange={handleChange}>
                  <option value={false}>The Public</option>
                  <option value={true}>Only to your followers</option>
                </select>
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
    showModal: state.modal.showPostModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HidePostModal" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostModal);
