import React from "react"

const Navigation = ()=>{
    return(<>
  <nav className="nav-box">
    <div className="logo-box"><span>Foodies</span></div>
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