import React, { useState } from "react";
import FormatDate from "./FormatDate";
import Loading from "./Loading"
import WeatherTemperature from "./WeatherTemperature"
import WeatherInfo from "./WeatherInfo"
import axios from "axios";
import './Weather.css'


export default function WeatherSearch(props) {
	const [weatherData, setWeatherData] = useState({});
	const [ready, setReady] = useState(false);
	const [city, setCity] = useState(props.defaultCity);

function showWeather(response) {
	setWeatherData({
		city: response.data.name,
		description: response.data.weather[0].description,
		temp: response.data.main.temp,
		wind: response.data.wind.speed,
		humidity: response.data.main.humidity,
		date: new Date(response.data.dt * 1000),
		icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
	});
	setReady(true);
}

function handleSubmit(event) {
	event.preventDefault();
	search();
}

function changeCity(event) {
	setCity(event.target.value);
}

function search() {
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a654db2f9bd0b0e600c5ab56e23dc457&units=metric`;
	axios.get(url).then(showWeather);
}

if (ready) {
	return (
	<div className="Weather">
		<FormatDate date={weatherData.date}/>
		<h1>Weather Search</h1>
		<div className="row">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Type a city" onChange={changeCity} />
				<input type="submit" value="Search" />
			</form>
		</div>
		<h2 className="WeatherInfo">{weatherData.city}</h2>
			<WeatherTemperature celsius={weatherData.temp}/>
			<WeatherInfo weather_info={weatherData} />
		</div>
		);
	} else {
		search();
		return <Loading />;
	}
}
