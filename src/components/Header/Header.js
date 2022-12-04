import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import Button from "../Button/Button";
import logo from "../../assets/images/logowhite.png";
import bg from "../../assets/images/bg.svg";
import devfolio from "../../assets/images/devfolio.png";

import Devfoliobutton from "../Devfoliobutton/Devfoliobutton";
import { useLocation } from "react-router-dom";

function Header({ anchorlinks }) {
  const [open, setOpen] = useState(true);
  let location = useLocation();
  const [headerview, setHeaderview] = useState(true);
  useEffect(() => {
    if (
      ["/home", "/schedule", "/leaderboard", "/sponsors", "/about"].includes(
        location.pathname
      )
    ) {
      setHeaderview(true);
    } else {
      setHeaderview(false);
    }
  }, [location]);
  const changeopen = () => {
    if (window.scrollY >= 80) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  window.addEventListener("scroll", changeopen);
  if (headerview) {
    return (
      <header className="header">
        <img
          src={bg}
          alt=""
          className={
            "header_fixed_image " + (!open ? "header_fixed_image_active" : "")
          }
        />
        <Logo logo={logo} />
        <nav className="header_navbar">
          <ul>
            {anchorlinks.map((al, index) => (
              <li key={index}>
                <a href={"/" + al}>{al}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header_devfolio_button_wrapper">
          {/* <Devfoliobutton /> */}
<Button image={devfolio} title="Applications Closed" />
        </div>
      </header>
    );
  }
}

export default Header;
