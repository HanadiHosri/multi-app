import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=33.8938&longitude=35.5018&daily=apparent_temperature_max,apparent_temperature_min,rain_sum&forecast_days=4")
        .then(res => {
            setWeatherData(res.data.daily);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="page">
            <h1>Beirut Weather</h1>
            <div className="container">
                {weatherData.time && weatherData.time.map((day, index) => (
                    <div key={index} className="weather-container">
                        <div className="date flex center">
                            <h2>{day}</h2>
                        </div>
                        <div className="temp flex row">
                            <h3>Min Temperature {weatherData.apparent_temperature_min[index]} °C</h3>
                            <h3>Max Temperature {weatherData.apparent_temperature_max[index]} °C</h3>
                        </div>
                        <div className="rain">
                            <p>Rain Sum {weatherData.rain_sum[index]} mm</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Weather;