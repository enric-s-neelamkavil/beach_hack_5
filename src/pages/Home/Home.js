import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import mousie from "../../assets/images/mousie.png";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div className="home_wrapper">
      <Header anchorlinks={["home", "events", "about", "gallery", "contact"]} />
      <Hero />
    </div>
  );
}

export default Home;
