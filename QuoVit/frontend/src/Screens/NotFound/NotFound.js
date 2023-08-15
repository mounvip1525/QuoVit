import React from 'react'
import Sub from '../../Components/Structure/Sub'
import './NotFound.css'
import pic from './notfound.png'

export default function NotFound() {
    return (
        <Sub>
        <div className="notfound">
            <img src={pic} alt="404" />
            <p>Sorry, the link you clicked is either broken or not found</p>
            <button>Go Back</button>
        </div>
        </Sub>
    )
}
