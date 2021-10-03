import React  , {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import main from './img/Login.png'
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
            <div className="login-1">
                <div>
                    <img src={logo} alt="QuoVit" />
                    <p className="name">A Quora Clone for College</p>
                </div>
                <img src={main} alt="Login" className="login-img" />
             </div>
            <div>
            <form onSubmit={handleSubmit} className="login-form login-form-2" style={{width:"30rem"}}>
            <div className="form-head">
            <h2>
                Welcome Back!
            </h2>
            <p style={{fontSize:"x-small"}}>New to this website? <Link to="/Signup">Create Account</Link></p>
            </div>
                <div>
                <div>
                    <label htmlFor="email">VIT Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange}/>
                </div>
                <button type="submit" className="login-btn">Login</button>
                </div>
            </form>
            </div>
        </div>
    )
}
