import { Clear } from '@material-ui/icons';
import React,{useState} from 'react'
import { useDispatch , useSelector } from "react-redux";
import { followUser,unfollowUser } from '../../Actions/users';
import { Add, Check } from '@material-ui/icons'
import avatar from './Avatar8.png'
import './User.css'

export default function User(props) {
    const [check,setCheck]=useState(true);
    const dispatch = useDispatch();
    const auth = useSelector((state)=>state.auth)
    const {name,designation,background,img,profileImg, tagLine,_id } = props.user;
        const handleUnfollow = () => {
        dispatch(unfollowUser(auth._id,_id))
      }
      const handleFollow = () => {
        dispatch(followUser(auth._id,_id))
        setCheck(false)
    }
    return (
        <div className="user-card">
            <img src={img || profileImg || avatar} alt={name} style={{background:background || "black"}}/>
            <div>
                <h4>{name}</h4>
                <p style={{fontSize:"x-small",color:"grey"}}>{designation || tagLine}</p>
            </div>
            {props.remove && 
            <Clear onClick={handleUnfollow}/>
            // <Clear />
            }
            {props.add ? check ? <Add className="suggestions-add" onClick={handleFollow}/> : <Check className="suggestions-add" /> : null }

        </div>
    )
}
