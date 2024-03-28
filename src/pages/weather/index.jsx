import React from "react";
import "./style.css";

const Weather = () => {

    return (
        <div className="page">
            <h1>Beirut</h1>
            <div className="container">
                <div className="temp">
                    <h3>Min temperature 20 °C</h3>
                    <h3>Max temperature 22 °C</h3>
                </div>
                <div className="rain">
                    <p>Rain sum 0.00 mm</p>
                </div>
            </div>
            
        </div>
    )
}

export default Weather;