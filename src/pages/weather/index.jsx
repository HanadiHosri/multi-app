import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
    const [data, setData] = useState({
        date: "2024-03-27",
        minTemp: 20,
        maxTemp: 22,
        rain: 0.00
    })

    useEffect(() => {
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=33.8938&longitude=35.5018&daily=apparent_temperature_max,apparent_temperature_min,rain_sum&forecast_days=4")
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])
    
    return (
        <div className="page">
            <h1>Beirut Weather</h1>
            <div className="container">
                <div className="date flex center">
                    <h2>2024-03-27</h2>
                </div>
                <div className="temp flex row">
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