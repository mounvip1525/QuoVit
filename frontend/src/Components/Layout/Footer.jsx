import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import './css/Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <CopyrightIcon /> Terms and Conditions
            </div>
            <Link to="/Contact">Contact Us</Link>
        </footer>
    )
}
