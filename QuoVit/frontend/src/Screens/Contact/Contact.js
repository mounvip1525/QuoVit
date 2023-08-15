import React from 'react'
import Sub from '../../Components/Structure/Sub'
import Developers from './Developers'
import Form from './Form'
import './css/Contact.css'

export default function Contact() {
    return (
        <Sub>
            <div className="contact-div">
                <div className="contact-head">
                    <h2>Contact Us</h2><hr />
                </div>
                <div className="contact-sub">
                    <Developers />
                    <Form />
                </div>
            </div>
        </Sub>
    )
}
