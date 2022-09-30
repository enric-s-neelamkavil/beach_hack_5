import React from "react";
import "./Sidenav.css";
import devfolio from "../../assets/images/devfolio.png";
import discord from "../../assets/images/discord.png";
import { FaArrowUp } from "react-icons/fa";

function Sidenav() {
  return (
    <div className="sidenav_wrapper">
      <a href="">
        <img src={devfolio} alt="" />
      </a>
      <a href="">
        <img src={discord} alt="" />
      </a>
      <a href="" style={{ background: "rgba(165, 250, 0, 0.2)" }}>
        <FaArrowUp className="arrow_to_top" />
      </a>
    </div>
  );
}

export default Sidenav;
