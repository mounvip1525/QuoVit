import React, { Component , useEffect } from "react";
import { getSavedPosts } from "../../Actions/posts";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../Components/Structure/Main";
import "./css/Landing.css";
import LandingCard from "../../Components/Cards/LandingCard";
import avatar from "./img/Avatar8.png";
import AddPostModal from "./AddPostModal";
import Empty from "../../Components/Empty/Empty";

export default function Saved(props){
  const dispatch = useDispatch();
  const {savedPosts} = useSelector((state) => state.posts);
  const auth = useSelector((state)=>state.auth)
  useEffect(() => {
    dispatch(getSavedPosts(auth._id));
  }, [dispatch,auth]);

    return (
        <MainLayout type="landing">
          <AddPostModal />
          <div className="landing-main">
            {savedPosts.length>0 ? savedPosts.map((post) => (
              <LandingCard
                post={post}
                saved={savedPosts.some(sPost=>sPost._id === post._id)}
              />
            )): <Empty msg="You don't seem to have any saved posts" index={3}/> }
          </div>
        </MainLayout>
    );
}


