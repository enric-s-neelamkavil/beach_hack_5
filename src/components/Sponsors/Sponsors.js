import React from "react";
import "./Sponsors.css";
import Sponsorsection from "./Sponsorsection/Sponsorsection";
import "./Sponsordata";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import { sponsor } from "./Sponsordata";

function Sponsors() {
  return (
    <div className="sponsors_wrapper">
      <Sectiontitle title="SPONSORS"/>
      <div className="sponsors_inner_wrapper">
        {sponsor.map((spon) => (
          <Sponsorsection
            tier={spon.tier}
            sponsorlist={spon.sponsorlist}
            color={spon.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
