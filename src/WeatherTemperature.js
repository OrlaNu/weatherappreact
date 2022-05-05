import React from "react"; 

export default function WeatherTemperature(props) {
    return (
        <div className="WeatherTemperature">
                <span className="temperature">Temp: {Math.round(props.celsius)}°C|F</span>
        </div>
    )
}




