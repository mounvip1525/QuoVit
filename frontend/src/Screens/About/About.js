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
            Dolor laborum cupidatat do excepteur mollit aute qui proident amet
            magna adipisicing voluptate officia elit. Dolor quis consectetur
            elit sint ullamco pariatur non. Nostrud elit dolore duis sit. Labore
            dolore esse sit officia sit laboris fugiat quis. Veniam Lorem mollit
            enim commodo magna aute est. Ex nulla cillum aliqua culpa commodo
            nostrud officia qui sit veniam veniam amet.
            <br />
            Sit fugiat amet non ullamco cupidatat amet laborum officia voluptate
            commodo. Velit incididunt excepteur esse eiusmod incididunt magna
            occaecat Lorem enim. Consectetur culpa velit do nulla adipisicing
            ex. Commodo dolor minim officia consectetur incididunt laboris ut
            laboris elit officia.
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
            Dolor laborum cupidatat do excepteur mollit aute qui proident amet
            magna adipisicing voluptate officia elit. Dolor quis consectetur
            elit sint ullamco pariatur non. Nostrud elit dolore duis sit. Labore
            dolore esse sit officia sit laboris fugiat quis. Veniam Lorem mollit
            enim commodo magna aute est. Ex nulla cillum aliqua culpa commodo
            nostrud officia qui sit veniam veniam amet.
            <br />
            Sit fugiat amet non ullamco cupidatat amet laborum officia voluptate
            commodo. Velit incididunt excepteur esse eiusmod incididunt magna
            occaecat Lorem enim. Consectetur culpa velit do nulla adipisicing
            ex. Commodo dolor minim officia consectetur incididunt laboris ut
            laboris elit officia.
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
          Cillum cupidatat nulla enim sit tempor velit nisi. Eu sunt ex velit
          aliqua cupidatat magna nulla amet ipsum velit esse deserunt laboris
          reprehenderit. Nulla ex incididunt ullamco sint duis cupidatat
          reprehenderit ea consequat deserunt aliqua id.
        </div>
      </div>
      <div className="about-mini">
        <div>
          Cillum cupidatat nulla enim sit tempor velit nisi. Eu sunt ex velit
          aliqua cupidatat magna nulla amet ipsum velit esse deserunt laboris
          reprehenderit. Nulla ex incididunt ullamco sint duis cupidatat
          reprehenderit ea consequat deserunt aliqua id.
        </div>
        <img src={img4} alt="Faculty Review" />
      </div>
      <div className="about-mini">
        <img src={img6} alt="Faculty Review" />
        <div>
          Cillum cupidatat nulla enim sit tempor velit nisi. Eu sunt ex velit
          aliqua cupidatat magna nulla amet ipsum velit esse deserunt laboris
          reprehenderit. Nulla ex incididunt ullamco sint duis cupidatat
          reprehenderit ea consequat deserunt aliqua id.
        </div>
      </div>
      <div className="about-mini">
        <div>
          Cillum cupidatat nulla enim sit tempor velit nisi. Eu sunt ex velit
          aliqua cupidatat magna nulla amet ipsum velit esse deserunt laboris
          reprehenderit. Nulla ex incididunt ullamco sint duis cupidatat
          reprehenderit ea consequat deserunt aliqua id.
        </div>
        <img src={img5} alt="Faculty Review" />
      </div>
    </Sub>
  );
}
