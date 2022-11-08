import React from "react";
import "./Schedulepage.css";
import Hamburger from "../../components/Hamburger/Hamburger";
import Header from "../../components/Header/Header";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
import Jumparrowright from "../../components/Jumparrow/Jumparrowright";
import Bottomnav from "../../components/Bottomnav/Bottomnav";

function Schedulepage() {
  return (
    <div className="schedulepage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Header
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Jumparrowright route="/leaderboard" />
      <Jumparrowleft route="/home" />
      <Sidenav />
      {/* <Bottomnav /> */}
      <Schedule />
      <Footer />
    </div>
  );
}

export default Schedulepage;
