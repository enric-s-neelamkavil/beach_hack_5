import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import mousie from "../../assets/images/mousie.png";

function Home() {
  return (
    <div className="home_wrapper">
      <Header anchorlinks={["home", "events", "about", "gallery", "contact"]} />
      <img src={mousie} />
      <div className="home_hero_wrapper"></div>
    </div>
  );
}

export default Home;
