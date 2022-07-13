import React, {useState} from "react";
import "./SignInBody.css";

function SignInBody() {

const [showSignInBox, setshowSignInBox] = useState(true)

//   function goToSignInPage() {
//    setshowSignInBox(true)
//   }

//   function goToSignUpPage() {
//    setshowSignInBox(false)
//   }

  function setshowSignInBoxAs(param) {
   setshowSignInBox(param)
  }

  console.log("showSignInBox: ", showSignInBox)
 
//  Initial value is given true so that first sign in box will appear
  return (
    <>
    {/* If showSignInBox is true, Sign In box wil appear otherwise sign up box will appear */}
    {showSignInBox ? (
      // Sign in 
      <div className="signin_body_container">
        <div className="signin_box_container">
          <p className="signin_box_title">Sign In</p>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button>Sign In</button>
          <button>Login as Guest User</button>
          <p className="signin_box_text">
            New to MoviesBox? <span onClick={()=>setshowSignInBoxAs(false)}>Sign up Now</span>
          </p>
        </div>
      </div>
    ) : (
       // sign-up 
      <div className="signup_body_container">
        <div className="signup_box_container">
        <p className="signup_box_title">Sign Up</p>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Sign Up</button>
        <button>Login as Guest User</button>
        <p className="signup_box_text">
          Already a member?<span onClick={()=>setshowSignInBoxAs(true)}>Sign In Now</span>
        </p>
         </div>
        </div>
    ) }
    </>
  );
}

export default SignInBody;
