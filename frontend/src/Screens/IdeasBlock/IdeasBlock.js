import React from "react";
import MainLayout from "../../Components/Structure/Main";
import IdeaCard from "../../Components/Cards/IdeaCard";
import avatar from "./img/Avatar8.png";
import "./css/IdeasBlock.css";

export default function IdeasBlock() {
  const ideas = [
    {
      id: 1,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      link: "",
      email: "",
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "black",
      },
    },
    {
      id: 1,
      title: "Quora Clone for VIT",
      description:
        "eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      link: "www.google.com",
      email: "mounvip1525@gmail.com",
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "red",
      },
    },
    {
      id: 1,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      link: "www.facebook.com",
      email: "mounvip1525@gmail.com",
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "blue",
      },
    },
    {
      id: 1,
      title: "Quora Clone for VIT",
      description:
        "Laborum anim officia ad consectetur aute culpa in ut pariatur cupidatat sint eiusmod. Magna est quis excepteur eu pariatur in ullamco ad aliqua pariatur. Deserunt Lorem tempor incididunt consectetur velit eu irure aliqua sit. Consequat exercitation nulla ipsum labore cupidatat aliquip ullamco anim tempor ad consectetur veniam eiusmod.",
      link: "",
      email: "",
      user: {
        name: "Mounvi Podapati",
        designation: "3rd year CSE Undergrad",
        avatar: avatar,
        background: "purple",
      },
    },
  ];
  return (
    <MainLayout type="ideasBlock">
      <div className="ideas-main">
        {ideas.map((idea) => (
          <IdeaCard idea={idea} />
        ))}
      </div>
    </MainLayout>
  );
}
