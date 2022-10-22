import React from "react";
import "./Teamcard.css";

function Teamcard({ image, name, designation }) {
  return (
    <div className="team_card">
      <img src={image} className="team_card_image" loading="lazy" />
      <div className="team_card_details_wrapper">
        <h3>{name}</h3>
        <span>{designation}</span>
      </div>
    </div>
  );
}

export default Teamcard;
