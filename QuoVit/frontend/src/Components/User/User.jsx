import React,{useState} from 'react'
import {useHistory }from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import { followUser,unfollowUser } from '../../Actions/users';
import { Add, Check,Clear } from '@material-ui/icons'
import avatar from './Avatar8.png'
import './User.css'

export default function User(props) {
  const history = useHistory();
    const [check,setCheck]=useState(true);
    const dispatch = useDispatch();
    const auth = useSelector((state)=>state.auth)
    const {name,designation,background,img,profileImg, tagLine,_id, comment } = props.user;
        const handleUnfollow = (e) => {
        dispatch(unfollowUser(auth._id,_id))
        e.stopPropagation()
      }
      const handleFollow = (e) => {
        if(auth._id){
            dispatch(followUser(auth._id,_id))
            setCheck(false)
            e.stopPropagation()
        } else {
            history.push("/Login")
        }
    }
    const handleUserChange = async () => {
        history.push({
            pathname: '/profile',
            state: {id:props.user.id || props.user._id}
        });
    }
    return (
        <div className={comment ? `user-card mb-3` : "user-card"} onClick={handleUserChange}>
            <img src={img || profileImg || avatar} alt={name} style={{background:background || "black"}}/>
            <div>
                <h4>{name}</h4>
                <p style={{fontSize:"x-small",color:"grey"}}>{designation || tagLine}</p>
                {comment && <p style={{color:"grey",fontStyle:"italic"}}>{comment}</p>}
            </div>
            { props.remove && <Clear onClick={handleUnfollow}/> }
            { props.add ? check ? <Add className="suggestions-add" onClick={handleFollow}/> : <Check className="suggestions-add" /> : null }
        </div>
    )
}
