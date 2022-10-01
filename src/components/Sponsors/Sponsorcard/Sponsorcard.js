import React from "react";
import "./Sponsorcard.css";
import logo from "../../../assets/images/discord.png";

function Sponsorcard() {
  return (
    <div className="sponsor_card_wrapper">
      <img src={logo} alt="" />
      <h3>name</h3>
    </div>
  );
}

export default Sponsorcard;
