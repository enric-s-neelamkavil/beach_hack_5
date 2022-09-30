import React, { useState } from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Logospin from "../../components/Logospin/Logospin";

function Home() {
  return (
    <div className="home_wrapper">
      <Logospin />
      <Hero />
    </div>
  );
}

export default Home;
