import React from "react";
import "./Button.css";

function Button({ image, title, content }) {
  return (
    <div className="button_wrapper">
      {content && (
        <div className="button_wrapper_content_wrapper">
          <span>{content}</span>
        </div>
      )}
      <a href="">
        {image && <img src={image} alt="" />}
        <span>{title}</span>
      </a>
    </div>
  );
}

export default Button;
