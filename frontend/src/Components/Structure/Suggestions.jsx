import React, { useEffect } from 'react'
import { useDispatch , useSelector } from "react-redux";
import { getSuggestedUsers } from '../../Actions/users';
import User from '../User/User';
import './css/Suggestions.css'

export default function Suggestions() {
    const dispatch = useDispatch();
    const sUsers = useSelector((state) => state.users.users);
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

