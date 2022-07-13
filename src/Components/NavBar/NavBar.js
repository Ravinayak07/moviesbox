import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom";

function NavBar({ ShowSignInButton}) {
 
    const navigate = useNavigate();
    function goToSignInPage(){
        navigate("/sign-in");
    }
    return(
        <div className="navbar_container">
         <img className="navbar_logo" src={logo} alt="logo"/>
         {/* condition to remove signinbutton. If ShowSignInButton is false.It will 
         show nothing other wise shows the button */}
         {ShowSignInButton === false ? " " : <button className="navbar_button" onClick={goToSignInPage}>Sign Up</button>}
        </div>
    )
}

export default NavBar;
