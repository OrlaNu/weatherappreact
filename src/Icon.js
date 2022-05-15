import React from "react" 
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",
    };

    const colorMapping = {
        "01d": "#ffdfba",
        "01n": "#373854",
        "02d": "#ffdfba",
        "02n": "#666666",
        "03d": "#ffdfba",
        "03n": "#666666",
        "04d": "#dbdcff",
        "04n": "#dbdcff",
        "09d": "#bae1ff",
        "09n": "#bae1ff",
        "10d": "#bae1ff",
        "10n": "#bae1ff",
        "11d": "#bae1ff",
        "11n": "#bae1ff",
        "13d": "#bae1ff",
        "13n": "#bae1ff",
        "50d": "#a7adba",
        "50n": "#a7adba",
    };

    return(
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color={colorMapping[props.iconColours]}
        size={props.size}
        animate={true}
        />
    );
}