import React from 'react'
import logo from './img/Avatar8.png'
import add from './img/add.png'
import './css/Suggestions.css'
import { Add } from '@material-ui/icons'

export default function Suggestions() {
    const users = [
        {
            id:1,
            name:"Mounvi Podapati",
            designation:"3rd Year CSE,VIT Vellore",
            img:logo,
            background:"red"
        },
        {
            id:2,
            name:"Mounvi Podapati",
            designation:"3rd Year CSE,VIT Vellore",
            img:logo,
            background:"green"
        },
        {
            id:3,
            name:"Mounvi Podapati",
            designation:"3rd Year CSE,VIT Vellore",
            img:logo,
            background:"yellow"
        },
        {
            id:4,
            name:"Mounvi Podapati",
            designation:"3rd Year CSE,VIT Vellore",
            img:logo,
            background:"purple"
        },
        {
            id:5,
            name:"Mounvi Podapati",
            designation:"3rd Year CSE,VIT Vellore",
            img:logo,
            background:"black"
        },
    ]
    return (
        <div className="suggestions-main">
            <h4 style={{fontWeight:"500",margin:"3vh auto 2vh"}}>Suggested for you</h4>
            {users.map(user=>(
                <div>
                    <img src={user.img} alt="" style={{background:user.background}} className="avatar" />
                    <div>
                        <h4>{user.name}</h4>
                        <p style={{fontSize:"x-small",color:"grey"}}>{user.designation}</p>
                    </div>
                    <Add className="suggestions-add"/>
                </div>
            ))}
        </div>
    )
}
