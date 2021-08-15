import React  , {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import './css/Auth.css'

export default function Login() {
    const [user,setUser] = useState({email:"",password:""})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }
    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    return (
        <div className="login-main">
            <div>
                <img src={logo} alt="QuoVit" />
                <p>A Quora Clone for College</p>
            </div>
            <h2>
                Welcome Back!
            </h2>
            <p style={{fontSize:"x-small"}}>New to this website? <Link to="/Signup">Create Account</Link></p>
            <form onSubmit={handleSubmit} className="login-form">
                <div>
                    <label htmlFor="email">VIT Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
