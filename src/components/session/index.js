import React from "react";
import "./style.css";

function Session(){
    

    return(
        <>
        <div className="main">
            <h2>Videos</h2>
            <div className="session-videos">
                <div className="video">    
                <iframe title="ola" width="560" height="315" src="https://www.youtube.com/embed/1I-3vJSC-Vo" frameborder="0"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                </div>
                <div className="video">    
                <iframe title="ola" width="560" height="315" src="https://www.youtube.com/embed/1I-3vJSC-Vo" frameborder="0"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picturee" allowfullscreen>
                </iframe>
                </div>
                <div className="video">    
                <iframe title="ola" width="560" height="315" src="https://www.youtube.com/embed/1I-3vJSC-Vo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-pictureee" allowfullscreen>
                </iframe>
                </div>
            </div>
        </div>
        </>
    );
}
export default Session;