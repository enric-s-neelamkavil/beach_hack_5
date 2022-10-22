import React from "react";
import "./Schedulepage.css";
import Hamburger from "../../components/Hamburger/Hamburger";
import Header from "../../components/Header/Header";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";

function Schedulepage() {
  return (
    <div className="schedulepage_wrapper">
      <Hamburger
        anchorlinks={[
          "home",
          "schedule",
          "leaderboard",
          "sponsors",
          // "about",
        ]}
      />
      <Header
        anchorlinks={[
          "home",
          "schedule",
          "leaderboard",
          "sponsors",
          // "about",
        ]}
      />
      <Schedule />
      <Footer />
    </div>
  );
}

export default Schedulepage;
