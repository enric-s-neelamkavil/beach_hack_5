import React from "react";
import Footer from "../../components/Footer/Footer";
import Hamburger from "../../components/Hamburger/Hamburger";
import Header from "../../components/Header/Header";
import Team from "../../components/Team/Team";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
import Bottomnav from "../../components/Bottomnav/Bottomnav";

function Aboutpage() {
  return (
    <div className="aboutpage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Header
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Sidenav />
      <Jumparrowleft route="/sponsors" />
      <Bottomnav />
      <Team />
      <Footer />
    </div>
  );
}

export default Aboutpage;
