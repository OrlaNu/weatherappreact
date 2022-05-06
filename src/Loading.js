import React from "react" 
import ReactAnimatedWeather from 'react-animated-weather';

export default function Loading() {
    return(
        <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="GOLDENROD"
        size={48}
        animate={true}
        />
    );
}