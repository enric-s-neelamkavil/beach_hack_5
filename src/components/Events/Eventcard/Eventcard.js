import React, { useState } from "react";
import "./Eventcard.css";
import register from "../../../assets/images/register.png";
import closed from "../../../assets/images/closed.png";

function Eventcard({ image, title, description, url, isActive, key }) {
  return (
    <div className="eventcard_wrapper" key={key}>
      <div className="eventcard_wrapper_image_wrapper">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="eventcard_wrapper_content_wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
        {isActive ? (
          <a href={url} target="__blank__">
            <img src={register} alt="" srcset="" loading="lazy" />
          </a>
        ) : (
          <a href="" className="ended">
            <img src={closed} alt="" srcset="" loading="lazy" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Eventcard;
