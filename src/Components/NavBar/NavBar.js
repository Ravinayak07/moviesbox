import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import Button from "../../Global/Button/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";

function NavBar({ ShowSignInButton, showInputField, isuserLoggedin, setIsUserLoggedIn }) {
  const navigate = useNavigate();
  function goToSignInPage() {
    navigate("/sign-in");
  }

  function logOutTheUser() {
    auth.signOut().then(() => {
      setIsUserLoggedIn(false);
    });
  }

  return (
    <div className="navbar_container">
      <img className="navbar_logo" src={logo} alt="logo" />
      {/* condition to remove signinbutton. If ShowSignInButton is false.It will 
         show nothing other wise shows the button */}
      {/* {ShowSignInButton === false ? " " : <button className="navbar_button" onClick={goToSignInPage}>Sign In</button>} */}
      {ShowSignInButton === false ? (
        " "
      ) : (
        <Button text="Sign In" onClicking={goToSignInPage} />
      )}

      {showInputField || isuserLoggedin ? (
        <div>
          {showInputField && <input className="navbar_input_field" />}
          {/* {showInputField ? <input /> : ""} */}
          {isuserLoggedin ? (
            <Button text="Logout" onClicking={logOutTheUser} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
