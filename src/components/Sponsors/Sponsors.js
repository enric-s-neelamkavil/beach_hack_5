import React from "react";
import "./Sponsors.css";
import Sponsorsection from "./Sponsorsection/Sponsorsection";
import "./Sponsordata";
import { sponsor } from "./Sponsordata";

function Sponsors() {
  return (
    <div className="sponsors_wrapper">
      <div className="sponsors_inner_wrapper">
        {sponsor.map((spon) => (
          <Sponsorsection tier={spon.tier} />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
