import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import Button from "../Button/Button";
import logo from "../../assets/images/logowhite.png";
import bg from "../../assets/images/bg.svg";

function Header({ anchorlinks }) {
  const [open, setOpen] = useState(true);
  const changeopen = () => {
    if (window.scrollY >= 80) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  window.addEventListener("scroll", changeopen);
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
      <Button title="Register" />
    </header>
  );
}

export default Header;
