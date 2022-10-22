import React from "react";
import Header from "../../components/Header/Header";
import Hamburger from "../../components/Hamburger/Hamburger";
import Sponsors from "../../components/Sponsors/Sponsors";
import { sponsor } from "../../components/Sponsors/Sponsordata";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";
function Sponsorspage() {
  return (
    <div className="sponsorspage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Header
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Sidenav />
      <Sponsors sponsor={sponsor} />
      <Footer />
    </div>
  );
}

export default Sponsorspage;
