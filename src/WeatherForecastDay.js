import React, { useState } from "react"; 
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
    const [unit] = useState('celsius');

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        if (unit !== "celsius") {
            temperature = Math.round(temperature * 9) / 5 + 32;
        }
        return`${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        if (unit !== "celsius") {
            temperature = Math.round(temperature * 9) / 5 + 32;
        }
        return`${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day]; 
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
                <Icon code={props.data.weather[0].icon} size={26} />
                    <div className="WeatherForecast-temp">
                        <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
                        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
                </div>
            </div>
    );
}