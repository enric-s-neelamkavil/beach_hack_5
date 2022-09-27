import React from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";

function Dashboard() {
  return (
    <div className="dashboard_wrapper">
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
