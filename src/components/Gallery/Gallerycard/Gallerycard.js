import React from "react";
import "./Gallerycard.css";

function Gallerycard({ image }) {
  return (
    <div
      className="gallery_card"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}

export default Gallerycard;
