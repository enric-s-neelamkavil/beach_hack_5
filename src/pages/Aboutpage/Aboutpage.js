import React from "react";
import Footer from "../../components/Footer/Footer";
import Hamburger from "../../components/Hamburger/Hamburger";
import Header from "../../components/Header/Header";
import Team from "../../components/Team/Team";

function Aboutpage() {
  return (
    <div className="aboutpage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Header
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Team />
      <Footer />
    </div>
  );
}

export default Aboutpage;
