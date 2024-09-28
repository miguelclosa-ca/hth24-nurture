import React from "react";
import TestFunction from "./TestFunction";

function Josh(){
    var x = TestFunction(5);
    // document.getElementById("test").textContent=x;
    return(
        <div className="josh-container">

            <h1 id="title">josh</h1>

            <h2 id="subheading">Welcome to josh!</h2>
            <p id="test"></p>
        </div>
    )

}

export default Josh;