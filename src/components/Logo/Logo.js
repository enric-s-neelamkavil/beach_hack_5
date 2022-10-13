import React from "react";
import "./Logo.css";
import { useNavigate } from "react-router-dom";

function Logo({ logo }) {
  const navigate = useNavigate();
  function jumpHome() {
    navigate("/");
  }
  return (
    <div className="dashboard_logo_wrapper" onClick={jumpHome}>
      <img src={logo} alt="" />
    </div>
  );
}

export default Logo;
