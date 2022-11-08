import React from "react";
import Hamburger from "../../components/Hamburger/Hamburger";
import Sponsors from "../../components/Sponsors/Sponsors";
import { sponsor } from "../../components/Sponsors/Sponsordata";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowright from "../../components/Jumparrow/Jumparrowright";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
function Sponsorspage() {
  return (
    <div className="sponsorspage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Sidenav />
      <Jumparrowright route="/about" />
      <Jumparrowleft route="/leaderboard" />
      <Sponsors sponsor={sponsor} />
      <Footer />
    </div>
  );
}

export default Sponsorspage;
