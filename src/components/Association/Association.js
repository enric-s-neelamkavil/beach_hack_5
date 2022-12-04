import React, { useEffect } from "react";
import "./Association.css";
import { association } from "./Associationdata";
function Association() {
  return (
    <div className="association_wrapper marquee" data-aos="zoom-in-up">
      <h2>In Association with</h2>
      <div className="association_inner_wrapper">
        {association.map((sa,index) => (
          <div key={index} className="association_single" data-aos="zoom-in">
            <a href={sa.url}></a>
            <img src={sa.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Association;
