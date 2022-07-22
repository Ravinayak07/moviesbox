import React from "react";
import "./HomePage.css";
import HomePageContent from "../../Components/HomePageContent/HomePageContent";
import NavBar from "../../Components/NavBar/NavBar";

function HomePage({isuserLoggedin, setIsUserLoggedIn}) {
    return(
        <div>
            <NavBar ShowSignInButton={false} showInputField={true} isuserLoggedin={isuserLoggedin} setIsUserLoggedIn={setIsUserLoggedIn} />
            <HomePageContent  />
        
        </div>
    )
}

export default HomePage;