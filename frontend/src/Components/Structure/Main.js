import React , {useState} from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import Sidebar from './Sidebar'
import Suggestions from './Suggestions'
import './css/Main.css'
import Loader from '../Loader/loader'

export default function MainLayout(props) {
        const [theme,setTheme] = useState("light")
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
            <button className="toggler"onClick={toggleTheme}>Toggle</button>
            <Navbar />
            <div className="layout-main">
                <Sidebar type={props.type}/>
                <div style={{width:"60%"}}>
                    <Loader />
                    {props.children}
                </div>
                <Suggestions />
            </div>
            <Footer />
        </div>
    )
}
