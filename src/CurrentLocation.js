import React from "react"
import './Weather.css'
import { FaSearchLocation } from 'react-icons/fa';
import handleSubmit from './WeatherSearch'

export default function CurrentLocation(){
    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                handleSubmit({
                    lat,lon
                })
            })
        }
    }

    return(
        <a><FaSearchLocation className="Location"onClick={handleLocation}/></a>
    )
}