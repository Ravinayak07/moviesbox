import React from "react";
import "./SignInPage.css";
import NavBar from "../../Components/NavBar/NavBar";
import SignInBody from "../../Components/SignInBody/SignInBody";

function SignInPage( {setIsUserLoggedIn} ) {
    return(
        <div>
            <NavBar ShowSignInButton={false} />
            <SignInBody setIsUserLoggedIn={setIsUserLoggedIn} />
        </div>
    )
}

export default SignInPage