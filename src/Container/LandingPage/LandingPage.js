import React from "react";
import "./LandingPage.css";
import NavBar from "../../Components/NavBar/NavBar";
import LandingPageContent from "../../Components/LandingPageContent/LandingPagecontent";

function LandingPage() {
    return(
        <div className="landingpage_container">
            <NavBar />
            <LandingPageContent />
            
        </div>
    )
}

export default LandingPage;