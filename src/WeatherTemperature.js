import React, {useState} from "react"; 

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');

    function showFahrenheit(event) {
    event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
            setUnit("celsius");
        }
    if(unit === "celsius") {
    return (
        <div className="WeatherTemperature">
                <span className="Temperature">Temp: {Math.round(props.celsius)}</span>
                <span> °C | <a href="/" onClick={showFahrenheit} className="Unit">°F</a></span>
        </div>
    );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
    return(
        <div className="WeatherTemperature">
            <span className="Temperature">Temp: {Math.round(fahrenheit)}</span>
            <span><a href="/" onClick={showCelsius} className="Unit"> °C </a>
            {" "}
            | °F 
            </span>
        </div>
        );
    }
}



