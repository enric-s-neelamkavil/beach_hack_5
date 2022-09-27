import React, { useState } from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Logospin from "../../components/Logospin/Logospin";

function Home() {
  return (
    <div className="home_wrapper">
      <Logospin />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
