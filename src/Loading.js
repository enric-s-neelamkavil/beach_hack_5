import React from "react";
import logo from "./assets/images/logowhite.png";
import "./Loading.css";
function Loading() {
  return (
    <div className="loading_wrapper">
      <img src={logo} alt="" />
    </div>
  );
}

export default Loading;
