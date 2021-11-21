import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import Sidebar from './Sidebar'
import Suggestions from './Suggestions'
import './css/Main.css'
import Loader from '../Loader/loader'

export default function MainLayout(props) {
    return (
        <div>
            <Navbar />
            <div className="layout-main">
                <Sidebar type={props.type}/>
                <div style={{width:"60%"}}>
                    <Loader />
                    {props.children}
                </div>
                <Suggestions />
            </div>
            <Footer />
        </div>
    )
}
