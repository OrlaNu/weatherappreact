import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials(){
return (
    <div className="Socials">
        <a href="https://github.com/OrlaNu/weatherappreact" target="_blank" rel="noreferrer" className="SocialsInfo"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/%C3%B3rla-nugent-123054151/" target="_blank" rel="noreferrer" className="SocialsInfo"><FaLinkedin /></a>
        <p>
            <a href="https://github.com/OrlaNu/weatherappreact" target="_blank" rel="noreferrer"> Open-source code </a>
            {" "} by Órla Nugent
        </p>
    </div>  
);
}