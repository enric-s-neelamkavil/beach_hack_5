import React from "react";
import "./Leaderboardpage.css";
import Header from "../../components/Header/Header";
import Hamburger from "../../components/Hamburger/Hamburger";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
import Jumparrowright from "../../components/Jumparrow/Jumparrowright";
import Bottomnav from "../../components/Bottomnav/Bottomnav";
function Leaderboardpage() {
  return (
    <div className="leaderboardpage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Header
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Sidenav />
      <Jumparrowright route="/sponsors" />
      <Jumparrowleft route="/schedule" />
      {/* <Bottomnav /> */}
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default Leaderboardpage;
