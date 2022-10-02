import React from "react";
import "./Sponsorcard.css";
import sapphirestone from "../../../assets/images/sapphirestone.png";
import emeraldstone from "../../../assets/images/emeraldstone.png";
import rubystone from "../../../assets/images/rubystone.png";
import diamondstone from "../../../assets/images/diamondstone.png";

function Sponsorcard({ image, name, tier }) {
  if (tier === "Emerald") {
    return (
      <div className="sponsor_card_wrapper emerald_tier">
        <img src={image} alt="" className="sponsor_logo" />
        {/* <div className="sponsor_card_name_wrapper">
          <h3>{name}</h3>
        </div> */}
        <img src={emeraldstone} alt="" className="sponsor_card_stone" />
      </div>
    );
  }
  if (tier === "Ruby") {
    return (
      <div className="sponsor_card_wrapper ruby_tier">
        <img src={image} alt="" className="sponsor_logo" />
        {/* <div className="sponsor_card_name_wrapper">
          <h3>{name}</h3>
        </div> */}
        <img src={rubystone} alt="" className="sponsor_card_stone" />
      </div>
    );
  }
  if (tier === "Sapphire") {
    return (
      <div className="sponsor_card_wrapper sapphire_tier">
        <img src={image} alt="" className="sponsor_logo" />
        {/* <div className="sponsor_card_name_wrapper">
          <h3>{name}</h3>
        </div> */}
        <img src={sapphirestone} alt="" className="sponsor_card_stone" />
      </div>
    );
  }
  if (tier === "Diamond") {
    return (
      <div className="sponsor_card_wrapper diamond_tier">
        <img src={image} alt="" className="sponsor_logo" />
        {/* <div className="sponsor_card_name_wrapper">
          <h3>{name}</h3>
        </div> */}
        <img src={diamondstone} alt="" className="sponsor_card_stone" />
      </div>
    );
  }
}

export default Sponsorcard;
