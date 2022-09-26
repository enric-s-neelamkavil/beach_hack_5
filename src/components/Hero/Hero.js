import React from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";
import "./Hero.css";
import discord from "../../assets/images/discord.png";
import devfolio from "../../assets/images/devfolio.png";

function Hero() {
  return (
    <div className="home_hero_wrapper">
      <div className="home_hero_wrapper_welcome_content">
        <span className="code_presents_wrapper">CODe presents</span>
        <h1>
          <span className="beach_wrapper">Beach</span> Hack{" "}
          <span className="five_wrapper">5</span>
        </h1>
      </div>
      <div className="home_hero_wrapper_button_wrapper">
        <Button image={devfolio} content="Apply with"/>
        <Button image={discord} content="Join us on"/>
      </div>
    </div>
  );
}

export default Hero;
