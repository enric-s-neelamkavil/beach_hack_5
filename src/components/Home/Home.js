import React from "react";
import Counter from "../Counter/Counter";
import "./Home.css";

function Home() {
  return (
    <div className="dashboard_home_wrapper">
      <h1 className="dashboard_home_title">
        BEACH <span className="hack5wrapper">HACK 5</span>
      </h1>
      <p className="dashboard_home_description">
        Presenting South India's first ever beach hackathon, providing a platform
        for students to solve various problems faced by our society while
        simultaneously improving their critical and creative thinking.
      </p>
      <div className="dashboard_home_counter_wrapper">
        <Counter num="30" title="Coding" />
        <Counter num="60" title="Teams" />
        <Counter num="30" title="Colleges" />
      </div>
    </div>
  );
}

export default Home;
