import React from "react";
import Sponsorcard from "../Sponsorcard/Sponsorcard";
import "./Sponsorsection.css";

function Sponsorsection({ tier, details }) {
  console.log(tier, details);
  return (
    <div className="sponsor_section_wrapper">
      <h2>{tier}</h2>
      {/* {details.map((spo) => (
        <div className="sponsor_section_inner_wrapper">
          <Sponsorcard />
        </div>
      ))} */}
    </div>
  );
}

export default Sponsorsection;
