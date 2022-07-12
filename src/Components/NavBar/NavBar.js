import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png"

function NavBar() {
    return(
        <div className="navbar_container">
         <img className="navbar_logo" src={logo} alt="logo"/>
         <button className="navbar_button">Sign Up</button>
        </div>
    )
}

export default NavBar;
