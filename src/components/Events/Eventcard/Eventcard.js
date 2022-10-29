import React, { useState } from "react";
import "./Eventcard.css";
import register from "../../../assets/images/register.png";
import closed from "../../../assets/images/closed.png";

function Eventcard({ image, title, description, url, isActive }) {
  return (
    <div className="eventcard_wrapper">
      <div className="eventcard_wrapper_image_wrapper">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="eventcard_wrapper_content_wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
        {isActive ? (
          <a href={url} target="_blank_">
            <img src={register} alt="" srcset="" loading="lazy" />
          </a>
        ) : (
          <a href={url} target="_blank_" className="ended">
            <img src={closed} alt="" srcset="" loading="lazy" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Eventcard;
