import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

export default function Sub(props) {
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
      <div className="layout-sub">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
