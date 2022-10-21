import React from "react";
import register from "../../../assets/images/register.png";
import "./Gamecard.css";

function Gamecard({ image, title, url, isActive }) {
  return (
    <div className="gamecard">
      <img src={image} alt="" loading="lazy" />
      <h3>{title}</h3>
      <p>TOURNAMENT</p>
      {isActive && (
        <a href={url}>
          <img src={register} alt="" loading="lazy" />
        </a>
      )}
    </div>
  );
}

export default Gamecard;
