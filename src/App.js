
import './App.css';
import React, { useState } from "react";
import Socials from './Socials'
import WeatherSearch from './WeatherSearch';
import { createContext } from "react"; 
import DarkModeToggle from "react-dark-mode-toggle";

export const ThemeContext = createContext(null);

export default function App(){
  const [theme, setTheme] = useState("dark"); 

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };
  return (
  <ThemeContext.Provider value={{ theme, toggleTheme}}>
    <div className="App" id={theme}> 
        <WeatherSearch defaultCity = "London"/>
        <Socials />
      <div className="switch">
        <label> {theme === "light"} </label>
        <DarkModeToggle onChange={toggleTheme} checked={theme ==="dark"} size={80}/> 
      </div>
      </div>
  </ThemeContext.Provider>
  );
}

