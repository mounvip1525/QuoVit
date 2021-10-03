import React, { Component } from "react";
import MainLayout from "../../Components/Structure/Main";
import "./css/Landing.css";
import LandingCard from "../../Components/Cards/LandingCard";
import avatar from "./img/Avatar8.png";
import AddPostModal from "./AddPostModal";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 0,
          title: "Quora Clone for VIT",
          description:
            "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
          likes: 11,
          comments: "5k",
          save: false,
          user: {
            name: "Mounvi Podapati",
            designation: "3rd year CSE Undergrad",
            avatar: avatar,
            background: "purple",
          },
        },
        {
          id: 1,
          title: "Quora Clone for VIT",
          description:
            "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
          likes: 5,
          comments: 10,
          save: false,
          user: {
            name: "Mounvi Podapati",
            designation: "3rd year CSE Undergrad",
            avatar: avatar,
            background: "purple",
          },
        },
        {
          id: 2,
          title: "Quora Clone for VIT",
          description:
            "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
          likes: 3,
          comments: "25",
          save: true,
          user: {
            name: "Mounvi Podapati",
            designation: "3rd year CSE Undergrad",
            avatar: avatar,
            background: "purple",
          },
        },
        {
          id: 3,
          title: "Quora Clone for VIT",
          description:
            "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
          likes: 1,
          comments: 0,
          save: false,
          user: {
            name: "Mounvi Podapati",
            designation: "3rd year CSE Undergrad",
            avatar: avatar,
            background: "purple",
          },
        },
      ],
    };
  }
  handleLikeClick = (id, value) => {
    const newPosts = [...this.state.posts];
    newPosts.map((p) => {
      if (id === p.id) {
        p.likes += value;
        return p;
      }
    }, this.setState({ posts: newPosts }));
  };

  handleSaveClick = (id) => {
    const newPosts = [...this.state.posts];
    newPosts.map((p) => {
      if (id === p.id) {
        p.save = !p.save;
        return p;
      }
    }, this.setState({ posts: newPosts }));
  };

  render() {
    return (
      <div>
        <MainLayout type="landing">
          <AddPostModal />
          <div className="landing-main">
            {this.state.posts.map((post) => (
              <LandingCard
                post={post}
                onLikeClick={this.handleLikeClick}
                onSaveClick={this.handleSaveClick}
              />
            ))}
          </div>
        </MainLayout>
      </div>
    );
  }
}
