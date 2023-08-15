import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mounvi from './img/mounvi.png'
import './css/Developers.css'

export default function Developers() {
    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
      };
    return (
  <div className="dev-div">
      <h3>Developers Info</h3>
      <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      transitionDuration={500}
      >
      <div className="dev-card">
        <img src={mounvi} alt="mounvi" />
        <h2>Mounvi Podapati</h2>
      </div>
    </Carousel>
  </div>
    )
}
