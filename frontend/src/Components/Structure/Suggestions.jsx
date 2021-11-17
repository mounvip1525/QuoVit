import React, {useEffect, useState} from 'react'
import { useDispatch , useSelector } from "react-redux";
import logo from './img/Avatar8.png'
import add from './img/add.png'
import './css/Suggestions.css'
import { Add, Check } from '@material-ui/icons'
import { getSuggestedUsers } from '../../Actions/users';
import User from '../User/User';

export default function Suggestions() {
    const dispatch = useDispatch();
    const sUsers = useSelector((state) => state.users);
    const auth = useSelector((state)=>state.auth)
    useEffect(() => {
      dispatch(getSuggestedUsers(auth._id));
    }, [dispatch,auth]);
    return (
        <div className="suggestions-main">
            <h4 style={{fontWeight:"500",margin:"3vh auto 2vh"}}>Suggested for you</h4>
            {sUsers.map(user=>(
                <User user={user} add={true}/>
            ))}
        </div>
    )
}

