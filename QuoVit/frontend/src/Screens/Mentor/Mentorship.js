import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../../Components/Layout/Navbar';
import Footer from '../../Components/Layout/Footer';
import Loader from '../../Components/Loader/loader';
import Empty from '../../Components/Empty/Empty';
import { getMentors } from '../../Actions/users';
import avatar from "./avatar.png"
import './Mentorship.css'

export default function Mentorship() {
    const [activeTab, setActiveTab] = useState("webDev");
    const dispatch = useDispatch();
    const mentors = useSelector((state) => state.users.mentors)
    console.log(mentors)
    useEffect(() => {
        dispatch(getMentors());
    }, [dispatch, mentors]);
    const history = useHistory()
    const handleClick = (id) => {
        history.push({
            pathname: '/profile',
            state: { id }
        });
    }
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
      const themeS = theme === "light" ? "dark" : "light";
      document.documentElement.classList.add("color-theme-in-transition");
      setTheme(themeS)
      document.documentElement.setAttribute("data-theme", theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("color-theme-in-transition");
      }, 1000);
    }
    return (
        <div>
        {theme === 'light' ? <i className="fa fa-moon toggler" onClick={toggleTheme}></i> : <i className="fas fa-sun toggler" onClick={toggleTheme}></i>}
        <Navbar />
        <div className="ment">
        <p style={{textAlign:"center"}}>Connect with our own circle</p>
                <div className="user-tab">
                    <h3
                        onClick={() => setActiveTab("webDev")}
                        style={{
                            borderColor:
                                activeTab === "webDev" ? "white" : "",
                        }}
                    >
                        Web Development
                    </h3>
                    <h3
                        onClick={() => setActiveTab("ml")}
                        style={{
                            borderColor:
                                activeTab === "ml" ? "white" : "",
                        }}
                    >
                        Machine Learning
                    </h3>
                    <h3
                        onClick={() => setActiveTab("bct")}
                        style={{
                            borderColor:
                                activeTab === "bct" ? "white" : "",
                        }}
                    >
                        Blockchain Dev
                    </h3>
                    <h3
                        onClick={() => setActiveTab("pythonDev")}
                        style={{
                            borderColor:
                                activeTab === "pythonDev" ? "white" : "",
                        }}
                    >
                        Python Developer
                    </h3>
                    <h3
                        onClick={() => setActiveTab("ds")}
                        style={{
                            borderColor:
                                activeTab === "ds" ? "white" : "",
                        }}
                    >
                        Data Science
                    </h3>

                </div>
            {mentors.webDev ? <div className="mentors-cont">
                {activeTab === "webDev" ? (
                    
                        mentors.webDev.length > 0 ? mentors.webDev.map((user) => (
                            <div className="mentor">
                                <img src={user.profileImg || avatar} alt={user.name} />
                                <h3>{user.name}</h3>
                                <button onClick={() => handleClick(user._id)}>Connect</button>
                            </div>
                        )) : <Empty msg="No results" index={2} />
                    
                ) : activeTab === "ml" ? (
                    
                        mentors.ml.length > 0 ? mentors.ml.map((user) => (
                            <div className="mentor">
                                <img src={user.profileImg || avatar} alt={user.name} />
                                <h3>{user.name}</h3>
                                <button onClick={() => handleClick(user._id)}>Connect</button>
                            </div>
                        )) : <Empty msg="No results" index={2} />
                    
                ) : activeTab === "bct" ? (
                    
                        mentors.bct.length > 0 ? mentors.bct.map((user) => (
                            <div className="mentor">
                                <img src={user.profileImg || avatar} alt={user.name} />
                                <h3>{user.name}</h3>
                                <button onClick={() => handleClick(user._id)}>Connect</button>
                            </div>
                        )) : <Empty msg="No results" index={2} />
                    
                ) : activeTab === "pythonDev" ? (
                    
                        mentors.pythonDev.length > 0 ? mentors.pythonDev.map((user) => (
                            <div className="mentor">
                                <img src={user.profileImg || avatar} alt={user.name} />
                                <h3>{user.name}</h3>
                                <button onClick={() => handleClick(user._id)}>Connect</button>
                            </div>
                        )) : <Empty msg="No results" index={2} />
                    
                ) : activeTab === "ds" ? (
                    
                        mentors.ds.length > 0 ? mentors.ds.map((user) => (
                            <div className="mentor">
                                <img src={user.profileImg || avatar} alt={user.name} />
                                <h3>{user.name}</h3>
                                <button onClick={() => handleClick(user._id)}>Connect</button>
                            </div>
                        )) : <Empty msg="No results" index={2} />
                    
                ) : null}
            </div> : <Loader load={true} />}
        </div>
        <Footer />
      </div>
    )
}
