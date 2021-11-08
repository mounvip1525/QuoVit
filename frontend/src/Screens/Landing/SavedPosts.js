import React, { Component , useEffect } from "react";
import { getSavedPosts } from "../../Actions/posts";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../Components/Structure/Main";
import "./css/Landing.css";
import LandingCard from "../../Components/Cards/LandingCard";
import avatar from "./img/Avatar8.png";
import AddPostModal from "./AddPostModal";

export default function Saved(props){
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.savedPosts);
  const auth = useSelector((state)=>state.auth)
  useEffect(() => {
    dispatch(getSavedPosts(auth._id));
  }, [dispatch,auth]);

    return (
      <div>
        <MainLayout type="landing">
          <AddPostModal />
          <div className="landing-main">
            {posts.map((post) => (
              <LandingCard
                post={post}
                saved={auth.savedPosts.includes(post._id)}
              />
            ))}
          </div>
        </MainLayout>
      </div>
    );
}


