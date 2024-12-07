import React from "react";
import "./Hero.css";
import profile_img_4 from "../../assets/profile_img_4.png";

/* Hero */
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img_4} alt="Profile" />
      <p>HELLO!</p>
      <h2><span>I am Oluwafemi Timothy Okunlade</span></h2>
      <h1>A Frontend Developer | Copywriter | AI Tutor From Nigeria.</h1>
      <div className="hero-action">
        <a
          href="https://github.com/okunlade-oluwafemi" 
          className="hero-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://docs.google.com/document/d/1doBlqFNJS-_o8XgUsQYTpugcBVt7EDQO/edit?usp=sharing&ouid=112900940861914859196&rtpof=true&sd=true" 
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
