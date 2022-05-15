import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forecastLoaded, setForecastLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect(() => {
        setForecastLoaded(false)
    }, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setForecastLoaded(true);
    }

    function loadForecast() {
        let apiKey = "a654db2f9bd0b0e600c5ab56e23dc457";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse)
    }

    if (forecastLoaded) {
        return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 5) {
                        return(
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                            );
                        } else {
                        return null;
                        }
                    })} 
            </div>
        </div>
        );
    } else {
        loadForecast();
        
        return null;
    }
}