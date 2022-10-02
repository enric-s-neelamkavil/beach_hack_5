import React from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Hamburger from "../../components/Hamburger/Hamburger";
import Schedule from "../../components/Schedule/Schedule";
import Sidenav from "../../components/Sidenav/Sidenav";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

function Dashboard() {
  return (
    <div className="dashboard_wrapper">
      <Hamburger
        anchorlinks={[
          "home",
          "about",
          "games",
          "schedule",
          "leaderboard",
          "sponsors",
        ]}
      />
      <Header
        anchorlinks={[
          "home",
          "about",
          "games",
          "schedule",
          "leaderboard",
          "sponsors",
        ]}
      />
      <Home />
      {/* <Schedule /> */}
      {/* <Sidenav /> */}
      <Events />
      {/* <Sponsors /> */}
      {/* <Footer /> */}
      {/* <Leaderboard /> */}
    </div>
  );
}

export default Dashboard;
