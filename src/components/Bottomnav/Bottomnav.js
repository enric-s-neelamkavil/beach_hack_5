import React from "react";
import Devfoliobutton from "../Devfoliobutton/Devfoliobutton";
import "./Bottomnav.css";
import discord from "../../assets/images/discord.png";
import { FaArrowUp } from "react-icons/fa";
function Bottomnav() {
  return (
    <div className="bottomnav_wrapper">
      <div className="bottomnav_inner_wrapper">
        <a href="https://discord.gg/F7QcYvkpef" target="_blank_">
          <img src={discord} alt="" />
        </a>
        <Devfoliobutton />
        <a
          href="#home"
          style={{ background: "var(--quarternary-shade-three)" }}
        >
          <FaArrowUp className="arrow_to_top" />
        </a>
      </div>
    </div>
  );
}

export default Bottomnav;
