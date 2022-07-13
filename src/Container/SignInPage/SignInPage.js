import React from "react";
import "./SignInPage.css";
import NavBar from "../../Components/NavBar/NavBar";
import SignInBody from "../../Components/SignInBody/SignInBody";

function SignInPage() {
    return(
        <div>
            <NavBar ShowSignInButton={false}/>
            <SignInBody />
        </div>
    )
}

export default SignInPage