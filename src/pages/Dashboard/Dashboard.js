import React from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";

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
    </div>
  );
}

export default Dashboard;
