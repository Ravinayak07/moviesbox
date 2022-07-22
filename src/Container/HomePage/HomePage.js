import React from "react";
import "./HomePage.css";
import HomePageContent from "../../Components/HomePageContent/HomePageContent";
import NavBar from "../../Components/NavBar/NavBar";

function HomePage() {
    return(
        <div>
            <NavBar ShowSignInButton={false} showInputField={true} />
            <HomePageContent />
        
        </div>
    )
}

export default HomePage;