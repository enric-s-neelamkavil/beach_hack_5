import React from "react";
import "./Sponsorcard.css";
import logo from "../../../assets/images/discord.png";

function Sponsorcard({ image, name }) {
  return (
    <div className="sponsor_card_wrapper">
      <img src={image} alt="" />
      <div className="sponsor_card_name_wrapper">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Sponsorcard;
