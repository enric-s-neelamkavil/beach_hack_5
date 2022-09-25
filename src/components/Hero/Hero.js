import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

function Hero() {
  return (
    <div className="home_hero_wrapper">
      <div className="home_hero_wrapper_welcome_content">
        <span className="code_presents_wrapper">CODE presents</span>
        <h1>
          <span className="beach_wrapper">Beach</span> Hack{" "}
          <span className="five_wrapper">5</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
