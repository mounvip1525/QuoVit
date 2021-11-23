import React from 'react'
import { useHistory } from 'react-router'
import Sub from '../../Components/Structure/Sub'
import avatar from "./avatar.png"
import './Mentorship.css'

export default function Mentorship() {
    const history = useHistory()
    let users = [
        {
            name: "Mounvi Podapati",
            profileImg:avatar,
            _id:"hello"
        },
        {
            name: "Mounvi Podapati",
            profileImg:avatar,
            _id:"hello"
        },
        {
            name: "Mounvi Podapati",
            profileImg:avatar,
            _id:"hello"
        },
        {
            name: "Mounvi Podapati",
            profileImg:avatar,
            _id:"hello"
        }
    ]
    const handleClick = (id) => {
        history.push({
            pathname: '/profile',
            state: {id}
        });
    }
    return (
        <Sub>
            <div className="mentors-cont">
                {users.map(user=>
                    <div className="mentor">
                        <img src={user.profileImg} alt={user.name} />
                        <h3>{user.name}</h3>
                        <button onClick={()=>handleClick(user._id)}>Connect</button>
                    </div>
                )}
            </div>
        </Sub>
    )
}
