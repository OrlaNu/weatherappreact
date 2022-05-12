import React from "react"; 
import Icon from "./Icon";

export default function WeatherInfo(props) {
    return (
		<div>
			<div className="float-left">
				<Icon code={props.weather_info.icon} size={80} />
			</div>
			<ul className="WeatherInfoList">
				<li className="text-capitalize">{props.weather_info.description}</li>
				<li>Wind: {Math.round(props.weather_info.wind)}km/h</li>
				<li>Humidity: {Math.round(props.weather_info.humidity)}%</li>    
			</ul>
		</div>
    )
}