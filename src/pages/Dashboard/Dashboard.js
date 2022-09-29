import React from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Hamburger from "../../components/Hamburger/Hamburger";

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
    </div>
  );
}

export default Dashboard;
