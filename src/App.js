
import './App.css';
import React, { useState } from "react";
import Socials from './Socials'
import WeatherSearch from './WeatherSearch';
import { createContext } from "react"; 
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

export default function App(){
  const [theme, setTheme] = useState("dark"); 

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };
  return (
  <ThemeContext.Provider value={{ theme, toggleTheme}}>
    <div className="App" id={theme}> 
      <div className="container">
        <WeatherSearch defaultCity = "London"/>
        <Socials />
      <div className="switch">
        <label> {theme === "light" ? "🌞 " : "🌙 "} </label>
        <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"}/>
        
      </div>
      </div>
    </div>
  </ThemeContext.Provider>
  );
}

