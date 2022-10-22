import React from "react";
import "./Button.css";

function Button({ image, title, content, url }) {
  return (
    <div className="button_wrapper">
      {content && (
        <div className="button_wrapper_content_wrapper">
          <span>{content}</span>
        </div>
      )}
      <a href={url} target="_blank_">
        {image && <img src={image} alt="" />}
        <span>{title}</span>
      </a>
    </div>
  );
}

export default Button;
