import React from "react"
import './navigation.css'
import './navMediaQ.css'

const Navigation = ()=>{
    return(<>
  <nav className="nav-box">
    <div className="logo-box"><span className="logo-text">Foodies</span></div>
    <div  className="nav-link-box">
        <ul className="nav-links">
            <li><a href="#home">home</a></li>
            <li><a href="#home">offers</a></li>
            <li><a href="#home">help</a></li>
            <li><a href="#home">sign in</a></li>
            <li><a href="#home">cart</a></li>
        </ul>
    </div>
  </nav>

    </>)
}

export default Navigation