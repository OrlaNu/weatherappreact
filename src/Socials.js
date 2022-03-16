import React from "react"
import { FaGithub } from "react-icons/fa";

export default function Socials(){
return (
    <div>
        <a href="https://github.com/OrlaNu/weatherappreact" target="_blank" rel="noreferrer"><FaGithub /></a>
        <p className="SocialsInfo">
            This was coded by Órla Nugent and is 
            {" "} <a href="https://github.com/OrlaNu/weatherappreact" target="_blank" rel="noreferrer"> open sourced </a>
        </p>
    </div>  
);
}