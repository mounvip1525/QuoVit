import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

export default function Sub(props) {
    return (
        <div>
            <Navbar />
            <div className="layout-sub">
            {props.children}
            </div>
            <Footer />
        </div>
    )
}
