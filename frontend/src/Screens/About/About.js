import React from "react";
import Sub from "../../Components/Structure/Sub";
import "./About.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import line from './img/line.png';

export default function About() {
  return (
    <Sub className="about-pg">
      <div className="about-head">
        <img src={line} alt="------------------" />
        <h1 className="about-h1">ABOUT US</h1>
        <img src={line} alt="------------------" />
      </div>
      <div className="about-cont">
        <div>
          <h4>What are we and what do we do?</h4>
          <p>
            QuoVIT is a social media platform for VIT students. Offering various facilities which the students belonging to an educational institution need. We serve as an all in one. While providing multi-faceted facilities ranging from the traditional social media posts to more college/VIT specific functionalities like faculty revies, doubt clarifications forum and more facilities.
            <br />
            All of this comes under the umbrella of one website which caters to the needs of an enormous educational institution like VIT. We make sure not to apply the one-fits all model to digital networking platforms and have thus chosen to take it upon ourselves to provide institution specific functionalities on our portal.
          </p>
        </div>
        <img src={img1} alt="Quovit" />
      </div>
      <div className="about-head">
        <img src={line} alt="------------------" />
        <h1 className="about-h1">WHAT DO WE DO?</h1>
        <img src={line} alt="------------------" />
      </div>
      <div className="about-cont about-cont2">
        <img src={img2} alt="Quovit" />
        <div>
          <h4>What are we and what do we do?</h4>
          <p>
          We make the lives of student easier, by giving them one place for all their needs related to college. Be it discussions, socializing, information gathering; QuoVIT has it all. We aim to improve the quality of life and education by providing a vital support system to the average student in order to empower them to make well informed decisions and have better control over their fate.
          </p>
        </div>
      </div>
      <div className="about-head">
        <img src={line} alt="------------------" />
        <h1 className="about-h1">OUR FEATURES</h1>
        <img src={line} alt="------------------" />
      </div>
      <div className="about-mini mini-first">
        <img src={img3} alt="Faculty Review" />
        <div>
          <b>Faculty Reviews</b><br /><br />
        Worried about a problematic class selection?  Make sure to visit the faculty review section on QuoVIT then, this will help you make the correct and well informed decision about taking the righ faculty and the right subject to help you in you adventurous and fruitful journey of your degree completion. Find hundreds of reviews on thousands of faculties and make the best informed and logical choice.
        </div>
      </div>
      <div className="about-mini">
        <div>
          <b>Ideas Block</b><br /><br />
        Feel like doing service to the community? Or simply putting out your innovative idea into the world just to see the response it gets?  In that case, the ideas sharing portal is the place to be. Here the user can share his/her ideas and make sure it gets some audience since it automatically goes onto the institution’s digital platform. This enables other users to make the choice of either helping in the solidification of the idea or just upvoting and supporting its progress.
        </div>
        <img src={img4} alt="Faculty Review" />
      </div>
      <div className="about-mini">
        <img src={img6} alt="Faculty Review" />
        <div>
          <b>Anonymous Confessions</b><br /><br />
        This is one for the public. Want to say something which holds a lot of value and truth but don’t want to go public with your identity disclosed? The confessions page was tailor made for you. This page is for those people looking to be heard but also avoid the heat. It offers a platform for users to convey their ideas/issues without disclosing their identities and thus keeping the heat off their backs. The existence of such a device simply calls for increased transparency withing the institution which would help it to flourish in the future.
        </div>
      </div>
      <div className="about-mini">
        <div>
          <b>Quora Featured</b><br /><br />
        Typical to what posts on popular social media platforms look like, the posts on QuoVIT are aimed at increasing the social networking aspect of a student’s internal college life. The posts can be made in the form of text. This empowers a user to easily make the best use of their time and understand what his or her mates in college are doing. This would help in nurturing a professional yet very social and inclusive environment and culture in the institution.
        </div>
        <img src={img5} alt="Faculty Review" />
      </div>
    </Sub>
  );
}
