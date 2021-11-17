import { Clear } from '@material-ui/icons';
import React from 'react'
import { useDispatch , useSelector } from "react-redux";
import { unfollowUser } from '../../Actions/users';
import avatar from './Avatar8.png'
import './User.css'

export default function User(props) {
    const dispatch = useDispatch();
    const auth = useSelector((state)=>state.auth)
    const {name,designation,background,img,profileImg, tagLine,_id } = props.user;
        const handleUnfollow = () => {
        dispatch(unfollowUser(auth._id,_id))
      }
    console.log("user",props)
    return (
        <div className="user-card">
            <img src={img || profileImg || avatar} alt={name} style={{background:background}}/>
            <div>
                <h4>{name}</h4>
                <p style={{fontSize:"x-small",color:"grey"}}>{designation || tagLine}</p>
            </div>
            {props.remove && 
            <Clear onClick={handleUnfollow}/>
            // <Clear />
            }
        </div>
    )
}
