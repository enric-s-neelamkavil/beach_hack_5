import React from "react";
import Sponsorcard from "../Sponsorcard/Sponsorcard";
import "./Sponsorsection.css";

function Sponsorsection({ tier, sponsorlist, color }) {
  return (
    <div className="sponsor_section_wrapper">
      {/* <h2 style={{ color: color }}>{tier}</h2> */}
      <div className="sponsor_section_inner_wrapper">
        {sponsorlist.map((sponsors) => (
          <Sponsorcard
            image={sponsors.img}
            name={sponsors.name}
            tier={tier}
            url={sponsors.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Sponsorsection;
