import React from "react"; 

export default function WeatherInfo(props) {
    return (
        <ul className="WeatherInfoList">
			<li><img className="IconImage" src={props.weather_info.icon} alt="Weather Icon"/></li>
			<li className="text-capitalize">{props.weather_info.description}</li>
			<li>Wind: {Math.round(props.weather_info.wind)}km/h</li>
			<li>Humidity: {Math.round(props.weather_info.humidity)}%</li>    
		</ul>
    )
}