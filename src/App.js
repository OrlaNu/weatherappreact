
import './App.css';
import React from "react";
import Socials from './Socials'
import WeatherSearch from './WeatherSearch';

export default function App(){
  return (
  <div className="App"> 
    <div className="container">
      <WeatherSearch />
      <Socials />
    </div>
  </div>
  );
}

