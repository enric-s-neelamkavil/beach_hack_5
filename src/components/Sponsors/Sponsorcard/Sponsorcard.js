import React from "react";
import "./Sponsorcard.css";
import sapphirestone from "../../../assets/images/sapphirestone.png";
import emeraldstone from "../../../assets/images/emeraldstone.png";
import rubystone from "../../../assets/images/rubystone.png";
import diamondstone from "../../../assets/images/diamondstone.png";

function Sponsorcard({ image, tier, url }) {
  console.log(url);
  if (tier === "Emerald") {
    return (
      <div className="sponsor_card_wrapper emerald_tier">
        <img src={image} alt="" className="sponsor_logo" />
        <img src={emeraldstone} alt="" className="sponsor_card_stone" />
        <a href={url} target="_blank_" className="sponsor_redirect_wrapper"></a>
      </div>
    );
  }
  if (tier === "Ruby") {
    return (
      <div className="sponsor_card_wrapper ruby_tier">
        <img src={image} alt="" className="sponsor_logo" loading="lazy" />
        <img src={rubystone} alt="" className="sponsor_card_stone" />
        <a href={url} target="_blank_" className="sponsor_redirect_wrapper"></a>
      </div>
    );
  }
  if (tier === "Sapphire") {
    return (
      <div className="sponsor_card_wrapper sapphire_tier">
        <img src={image} alt="" className="sponsor_logo" loading="lazy" />
        <img src={sapphirestone} alt="" className="sponsor_card_stone" />
        <a href={url} target="_blank_" className="sponsor_redirect_wrapper"></a>
      </div>
    );
  }
  if (tier === "Diamond") {
    return (
      <div className="sponsor_card_wrapper diamond_tier">
        <img src={image} alt="" className="sponsor_logo" loading="lazy" />
        <img src={diamondstone} alt="" className="sponsor_card_stone" />
        <a href={url} target="_blank_" className="sponsor_redirect_wrapper"></a>
      </div>
    );
  }
}

export default Sponsorcard;
