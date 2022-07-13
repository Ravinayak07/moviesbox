import React from "react";
import "./LandingPage.css";
import NavBar from "../../Components/NavBar/NavBar";
import LandingPageContent from "../../Components/LandingPageContent/LandingPagecontent";

function LandingPage() {
    return(
        <div className="landingpage_container">
             <NavBar />{/* here we not not sending any value for ShowSignInButton,
             so it will become undefined and signin button will appear in the nav bar of landing page */}
            <LandingPageContent />
            
        </div>
    )
}

export default LandingPage;