import React, { useState } from "react";
import axios from "axios";

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
    <div className="App">
      <h1>Weather Search</h1>
      <h2>Not styled yet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      {temperature && (
        <h3 className="WeatherInfo">
          <ul>
            <h2>{temperature.city}</h2>
            <li>Temp: {Math.round(temperature.temperature)}°</li>
            <li>Wind: {Math.round(temperature.wind)}km/h</li>
            <li>
              <img src={temperature.icon} alt="Weather Icon" />
            </li>
          </ul>
        </h3>
      )}
    </div>
  );
}
