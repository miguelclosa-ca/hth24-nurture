import React from 'react';
import "../styles/FooterSheet.css";
import flower from "../BackgroundImages/flowerbloom.gif";
import leaf from "../BackgroundImages/leaf.gif";

function Footer() {
    return (
        <div className="footer-container">
            <div className="flower-container">
                {/*<img src={flower} alt="flower"/>*/}
            </div>

            <img src={flower} alt={"flower"} className="flower"></img>
            <p id="credits">A HackTheHill 2024 Project by: Max Sobota, Miguel Closa, Brady Kearley, Josh Sharpe</p>
        </div>

    );
}

export default Footer;