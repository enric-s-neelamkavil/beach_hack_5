import React, { useEffect } from "react";
import "./Sidenav.css";
import discord from "../../assets/images/discord.png";
import { FaArrowUp } from "react-icons/fa";

function Sidenav() {
  function scrollingToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="sidenav_wrapper">
      <a href="https://discord.gg/F7QcYvkpef" target="_blank_">
        <img src={discord} alt="" />
      </a>
      <a
        href="#home"
        style={{ background: "var(--quarternary-shade-three)" }}
        onClick={scrollingToTop}
      >
        <FaArrowUp className="arrow_to_top" />
      </a>
    </div>
  );
}

export default Sidenav;
