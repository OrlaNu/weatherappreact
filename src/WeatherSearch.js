import React, { useState } from "react";
import axios from "axios";
import './Weather.css'

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");

  function showTemperature(response) {
    setTemperature({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a654db2f9bd0b0e600c5ab56e23dc457&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <h1>Weather Search</h1>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Type a city" onChange={changeCity} />
          <input type="submit" value="Search" />
        </form>
      </div>
      <ul className="Date">
        <li>Wednesday 7:00</li>
      </ul>
      <h2 className="WeatherInfo">{temperature.city}</h2>
      {temperature && (
          <ul className="WeatherInfoList">
            <li><img className="IconImage" src={temperature.icon} alt="Weather Icon"/></li>
              <li>Temp: {Math.round(temperature.temperature)}°</li>
              <li>Wind: {Math.round(temperature.wind)}km/h</li>
              
          </ul>
      )}
    </div>
  );
}
