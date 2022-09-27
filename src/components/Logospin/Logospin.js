import React from "react";
import "./Logospin.css";
import logo from "../../assets/images/logo1.png";

function Logospin() {
  return (
    <div className="logo_wrapper">
      {/* <span className="one">E</span>
      <span className="two">X</span>
      <span className="three">P</span>
      <span className="four">L</span>
      <span className="five">O</span>
      <span className="six">R</span>
      <span className="seven">E</span>
      <span className="eight">M</span>
      <span className="nine">O</span>
      <span className="ten">R</span>
      <span className="eleven">E</span> */}
      <img src={logo} alt="" />
    </div>
  );
}

export default Logospin;
