import React from "react";
import Header from "../../components/Header/Header";
import Hamburger from "../../components/Hamburger/Hamburger";
import Sponsors from "../../components/Sponsors/Sponsors";
import { sponsor } from "../../components/Sponsors/Sponsordata";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowright from "../../components/Jumparrow/Jumparrowright";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
import Bottomnav from "../../components/Bottomnav/Bottomnav";
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
      <Jumparrowright route="/about" />
      <Jumparrowleft route="/leaderboard" />
      {/* <Bottomnav /> */}
      <Sponsors sponsor={sponsor} />
      <Footer />
    </div>
  );
}

export default Sponsorspage;
