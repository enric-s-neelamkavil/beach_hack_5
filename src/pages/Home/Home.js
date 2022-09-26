import React, { useState } from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div className="home_wrapper">
      {/* <Header anchorlinks={["home"]}/> */}
      <Logo />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
