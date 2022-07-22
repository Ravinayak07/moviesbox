import React, { useState } from "react";
import "./SignInBody.css";
import { SIGN_IN_BODY_TEXT } from "../../constants/constants";
import Button from "../../Global/Button/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";

function SignInBody({ setIsUserLoggedIn }) {
  const navigate = useNavigate();

  const [showSignInBox, setshowSignInBox] = useState(true);

  //   function goToSignInPage() {
  //    setshowSignInBox(true)
  //   }

  //   function goToSignUpPage() {
  //    setshowSignInBox(false)
  //   }

  function setshowSignInBoxAs(param) {
    setshowSignInBox(param);
  }

  function sign_up() {
    // console.log(name);
    // console.log(email);
    // console.log(password);

    if (email === "" || name === "" || password === "") {
      alert("Fields can't be empty");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
        setIsUserLoggedIn(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  function sign_in() {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      console.log("successfully logged in");
      setIsUserLoggedIn(true);
      navigate("/");
    });
  }

  console.log("showSignInBox: ", showSignInBox);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //  Initial value is given true so that first sign in box will appear
  return (
    <>
      {/* If showSignInBox is true, Sign In box wil appear otherwise sign up box will appear */}
      {showSignInBox ? (
        // Sign in
        <div className="signin_body_container">
          <div className="signin_box_container">
            <p className="signin_box_title">{SIGN_IN_BODY_TEXT.SIGN_IN}</p>
            <input
              placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER}
              value={email}
              onChange={(eve) => setEmail(eve.target.value)}
            />
            <input
              placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
              type="password"
              value={password}
              onChange={(eve) => setPassword(eve.target.value)}
            />
            <Button text={SIGN_IN_BODY_TEXT.SIGN_IN} onClicking={sign_in} />
            <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
            {/* <button>{SIGN_IN_BODY_TEXT.SIGN_IN}</button>
          <button>{SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER}</button> */}
            <p className="signin_box_text">
              {SIGN_IN_BODY_TEXT.NEW_TO_MOVIE_APP}{" "}
              <span onClick={() => setshowSignInBoxAs(false)}>
                {SIGN_IN_BODY_TEXT.SIGN_UP_NOW}
              </span>
            </p>
          </div>
        </div>
      ) : (
        // sign-up
        <div className="signup_body_container">
          <div className="signup_box_container">
            <p className="signup_box_title">{SIGN_IN_BODY_TEXT.SIGN_UP}</p>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              //e means event which means anything that is clicked in keyword. that will be gets stored
              //inside name variable through setName
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(eve) => setEmail(eve.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              onClicking={sign_up}
              // disabled={email === "" || name === "" || password === ""}
              // true or false will be passed in disabled
              text={SIGN_IN_BODY_TEXT.SIGN_UP}
            />
            <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
            <p className="signup_box_text">
              {SIGN_IN_BODY_TEXT.HAVE_AN_ACCOUNT}
              <span onClick={() => setshowSignInBoxAs(true)}>
                {SIGN_IN_BODY_TEXT.SIGN_IN_NOW}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SignInBody;
