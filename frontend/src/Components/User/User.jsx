import { Clear } from '@material-ui/icons';
import React from 'react'
import avatar from './Avatar8.png'
import './User.css'

export default function User(props) {
    const {name,designation,background,img, tagLine } = props.user;
    return (
        <div className="user-card">
            <img src={avatar || img} alt={name} style={{background:background}}/>
            <div>
                <h4>{name}</h4>
                <p style={{fontSize:"x-small",color:"grey"}}>{designation || tagLine}</p>
            </div>
            {props.remove && 
            <Clear />
            }
        </div>
    )
}
