import React from "react";
import register from "../../../assets/images/register.png";
import "./Gamecard.css";
import closed from "../../../assets/images/closed.png";

function Gamecard({ image, title, url, isActive,key }) {
  return (
    <div className="gamecard" key={key}>
      <img src={image} alt="" loading="lazy" />
      <h3>{title}</h3>
      <p>TOURNAMENT</p>
      {isActive ? (
        <a href={url} target="__blank__">
          <img src={register} alt="" srcset="" loading="lazy" />
        </a>
      ) : (
        <a href={url} target="__blank__" className="ended">
          <img src={closed} alt="" srcset="" loading="lazy" />
        </a>
      )}
    </div>
  );
}

export default Gamecard;
