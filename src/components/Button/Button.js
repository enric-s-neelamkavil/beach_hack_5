import React from "react";
import "./Button.css";

function Button({ image,content }) {
  return (
    <div className="button_wrapper">
      <div className="button_wrapper_content_wrapper">
        <span>{content}</span>
      </div>
      <a href="">
        <img src={image} alt="" />
      </a>
    </div>
  );
}

export default Button;
