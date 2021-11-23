import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './css/Footer.css'
import { Link } from 'react-router-dom';

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
