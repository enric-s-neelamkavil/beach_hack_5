import React, { useEffect, useState } from "react";
import Devfoliobutton from "../Devfoliobutton/Devfoliobutton";
import "./Bottomnav.css";
import { useLocation } from "react-router-dom";
import discord from "../../assets/images/discord.png";
import { FaArrowUp } from "react-icons/fa";
import Button from '../Button/Button'
function Bottomnav() {
  let location = useLocation();
  const [basenav, setBasenav] = useState(true);
  function scrollingToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    if (
      ["/home", "/schedule", "/leaderboard", "/sponsors", "/about"].includes(
        location.pathname
      )
    ) {
      setBasenav(true);
    } else {
      setBasenav(false);
    }
  }, [location]);
  if (basenav) {
    return (
      <div className="bottomnav_wrapper">
        <div className="bottomnav_inner_wrapper">
          <a href="https://discord.gg/F7QcYvkpef" target="_blank_">
            <img src={discord} alt="" />
          </a>
          <div style={{ height: "44px", overflow: "hidden" }}>
            {/* <Devfoliobutton /> */}
            <Button title="Applications Closed"/>
          </div>
          <a href="#home" onClick={scrollingToTop}>
            <FaArrowUp className="arrow_to_top" />
          </a>
        </div>
      </div>
    );
  }
}

export default Bottomnav;
