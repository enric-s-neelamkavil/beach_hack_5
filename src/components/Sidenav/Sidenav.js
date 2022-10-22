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
      <a href="https://discord.gg/F7QcYvkpef" target="_blank_">
        <img src={discord} alt="" />
      </a>
      <a href="#home" style={{ background: "var(--quarternary-shade-three)" }}>
        <FaArrowUp className="arrow_to_top" />
      </a>
    </div>
  );
}

export default Sidenav;
