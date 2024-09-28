import React from 'react';
// import FlowerGround from './FlowerGround';
import flower from "../BackgroundImages/flowerbloom.gif";
import leaf from "../BackgroundImages/leaf.gif";
import "../styles/FlowerSheet.css"

function Flower() {
    return (

        <div className="flower-container">

            <div className="flower-formation">
                {/*<img src={leaf} alt="leaf"/>*/}
                <img src={flower} alt="flower"/>
            </div>
            {/*<h1>Your Flower Today</h1>*/}

            {/*<FlowerGround/>*/}
        </div>



    );
}

export default Flower;