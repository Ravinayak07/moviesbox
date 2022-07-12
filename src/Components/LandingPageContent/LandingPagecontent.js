import React from "react";
import "./LandingPageContent.css";

// B.1) title
// B.2) Subtitle
// B.3) Description
// B.4) Search Field and Button
function LandingPageContent() {

    return(
        <div className="landingpageContent_container">
            <p className="landingpageContent_title">Unlimited films, TV programmes and more.</p>
            <p className="landingpageContent_subtitle">Watch anywhere. Cancel at anytime</p>
            <p className="landingpageContent_desc">Ready to watch? Enter your email to create or restart your membership</p>
            <div className="landingpageContent_input">
               <input></input>
               <button>GET STARTED</button>
            </div>
            
        </div>
    )
}

export default LandingPageContent;
