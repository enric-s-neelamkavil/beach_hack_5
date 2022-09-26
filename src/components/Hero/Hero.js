import React from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";
import "./Hero.css";
import discord from "../../assets/images/discord.png";
import devfolio from "../../assets/images/devfolio.png";
import Explore from "../Explore/Explore";

function Hero() {
  return (
    <div className="home_hero_wrapper">
      <div className="home_hero_wrapper_welcome_content">
        <span className="code_presents_wrapper">CODe presents</span>
        <h1>
          <span className="beach_wrapper">BEACH</span> HACK{" "}
          <span className="five_wrapper">5</span>
        </h1>
      </div>
      <div className="home_hero_wrapper_button_wrapper">
        <Button image={devfolio} title="Devfolio" content="Apply with" />
        <Button image={discord} title="Discord" content="Join us on" />
      </div>
      <Explore />
    </div>
  );
}

export default Hero;
