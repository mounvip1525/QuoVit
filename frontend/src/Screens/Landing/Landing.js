import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainLayout from "../../Components/Structure/Main";
import "./css/Landing.css";
import LandingCard from "../../Components/Cards/LandingCard";
import avatar from "./img/Avatar8.png";

export default class Landing extends Component {
  posts = [
    {
      id: 0,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      likes: 10,
      comments: 0,
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
      likes: 0,
      comments: 0,
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
      likes: 0,
      comments: 0,
      save: false,
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
      likes: 0,
      comments: 0,
      save: false,
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "purple",
      },
    },
  ];

  // handleLikeIncrement = (post) => {
  //   const posts = [...this.posts];
  //   console.log(posts);
  //   posts.map((p) => {
  //     if (p.id === post.id) {
  //       p.likes += 1;
  //       return p;
  //     }
  //   }, this.setState({ posts: posts }));
  // };

  // handleLikeDeccrement = (posts) => {
  //   const post = [...this.state.posts];
  //   post.map((p) => {
  //     if (p.id === post.id) {
  //       p.likes -= 1;
  //       return p;
  //     }
  //   }, this.setState({ posts: posts }));
  // };

  render() {
    return (
      <div>
        <MainLayout>
          <div className="landing-main">
            {this.posts.map((post) => (
              <LandingCard
                post={post}
                // onLikeIncrement={this.handleLikeIncrement}
                // onLikeDecrement={this.handleLikeDeccrement}
              />
            ))}
          </div>
        </MainLayout>
      </div>
    );
  }
}
