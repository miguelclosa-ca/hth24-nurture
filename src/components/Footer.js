import React from 'react';
import "../styles/FooterSheet.css";
import flower from "../BackgroundImages/flowerbloom.gif";

function Footer(props) {
    return (
        <div className="footer-container">
            <div className="flower-container">
                <img src={flower} alt="flower"/>
            </div>

            <p>A HackTheHill 2024 Project by: Max Sobota, Miguel Closa, Brady Kearley, Josh Sharpe</p>
        </div>

    );
}

export default Footer;