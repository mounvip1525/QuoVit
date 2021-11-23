import React from 'react'
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import './css/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <Link to="/About">
                <InfoIcon /> About Us
            </Link>
            <Link to="/Contact">Contact Us</Link>
        </footer>
    )
}
