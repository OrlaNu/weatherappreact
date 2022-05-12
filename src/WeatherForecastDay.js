import React from "react"; 
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
    }
    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
                <Icon code={props.data.weather[0].icon} size={26} color={"#a7adba"} />
                    <div className="WeatherForecast-temp">
                        <span className="WeatherForecast-temp-max">{Math.round(props.data.temp.max)}°</span>
                        <span className="WeatherForecast-temp-min">{Math.round(props.data.temp.min)}°</span>
                    <div className="WeatherForecast-description">{props.data.weather.main}</div>
                </div>
            </div>
    )
}