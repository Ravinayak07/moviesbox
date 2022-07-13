## MOVIESBOX:
- First We will make:
```
1) Landing Page:
    A)Navbar:
        A.1) Image(left)
        A.2) Buuton
    B)Body :
        B.1) title
        B.2) Subtitle
        B.3) Description
        B.4) Search Field and Button
```
- We will make a container folder for each page and this folder will contain the components of that page
- For ex: there will be a Landing Page container which will have components like Navbar and body.
- So compoents will be called in their respective containers and these containers will be called in the App.js

- Now install react-router-dom in the terminal
```
const isuserLoggedin = false;
<Route path="/" element={isuserLoggedin? ""  : <LandingPage /> } />

OR

<Route path="/" element={isuserLoggedin === true ? ""  : <LandingPage /> } />


//both are same
```

- Now we will make Navbar Component : Navbar folder inside component folder Then inside Navbar folder-> we will make Navbar.js and Navbar.css


- New route needs new component which makes files heavy. So instead of using new router for signup box, we can use useState function and ternary operator to switch between sign-up and sign-in without using a new route

- useState takes two parameters , 1st param is a varibale, 2nd param is a function which sets value to the variable


```
import React, {useState} from "react";
import "./SignInBody.css";

function SignInBody() {

const [showSignInBox, setshowSignInBox] = useState(true)

  function goToSignInPage() {
   setshowSignInBox(true)
  }

  function goToSignUpPage() {
   setshowSignInBox(false)
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
            New to MoviesBox? <span onClick={goToSignUpPage}>Sign up Now</span>
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
          Already a member?<span onClick={goToSignInPage}>Sign In Now</span>
        </p>
         </div>
        </div>
    ) }
    </>
  );
}

export default SignInBody;

```
- We can make the above code more optimized by combining the two functions into one and passing parameter
- For ex:- 
```
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

```