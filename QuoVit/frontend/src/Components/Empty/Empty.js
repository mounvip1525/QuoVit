import React from 'react'
import './Empty.css'
import pic1 from "./img/1.svg"
import pic2 from "./img/2.svg"
import pic3 from "./img/3.svg"
import pic4 from "./img/4.svg"

export default function Empty({msg,index,small}) {
    const photo = index === 1 ? pic1 : index === 2 ? pic2 : index === 3 ? pic3 : pic4
    console.log(photo)
    return (
        <section className="empty">
            <h5>{msg}</h5>
            <img src={photo} alt="Empty" className={small ? "small" : ""}/>
        </section>
    )
}
