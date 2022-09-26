import React from "react";
import "./Logo.css";
import logo from "../../assets/images/mousie.png";

function Logo() {
  return (
    <div className="logo_wrapper">
      <img src={logo} alt="" />
    </div>
  );
}

export default Logo;
