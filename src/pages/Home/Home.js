import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home_wrapper">
      <Header anchorlinks={["home", "events", "about", "gallery", "contact"]} />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
