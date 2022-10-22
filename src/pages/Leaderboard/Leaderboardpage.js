import React from "react";
import "./Leaderboardpage.css";
import Header from "../../components/Header/Header";
import Hamburger from "../../components/Hamburger/Hamburger";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import Footer from "../../components/Footer/Footer";
function Leaderboardpage() {
  return (
    <div className="leaderboardpage_wrapper">
      <Hamburger
        anchorlinks={[
          "home",
          "schedule",
          "leaderboard",
          "sponsors",
          "about",
        ]}
      />
      <Header
        anchorlinks={[
          "home",
          "schedule",
          "leaderboard",
          "sponsors",
          "about",
        ]}
      />
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default Leaderboardpage;
