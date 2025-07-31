import React from 'react'
import "./Header.css";
import githubLogo from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Header = () => {
  return (
    <section className='header'>
        <h1>Quiz App</h1>
        <div className='social_links'>
            <a href="https://github.com/MuhammadOsamaNooruddin" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Logo" style={{width: '40px', height: '40px'}} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-osama-noor-uddin-1908741b4/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn Logo" style={{width: '40px', height: '40px'}} />
            </a>
        </div>
    </section>
  )
}

export default Header