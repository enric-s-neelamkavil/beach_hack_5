import React from "react";
import "./Logo.css";

function Logo({ logo }) {
  return (
    <div className="dashboard_logo_wrapper">
      <img src={logo} alt="" />
    </div>
  );
}

export default Logo;
