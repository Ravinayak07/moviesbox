import React from "react";
import "./SignInBody.css";

function SignInBody() {
    return(
       <div className="signinbody_container">
        <div className="siginbox_container">
           <p className="signinbox_title">Sign In</p>
           <input placeholder="Email"/>
           <input placeholder="Password"/>
           <button>Sign In</button>
           <button>Login as Guest User</button>
           <p className="signinbox_text">New to MoviesBox?  <span>Sign up Now</span></p>
        </div>
           
       </div>
    )
}

export default SignInBody;
