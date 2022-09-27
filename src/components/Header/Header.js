import React from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import Button from "../Button/Button";
import logo from "../../assets/images/logo1.png";

function Header({ anchorlinks }) {
  return (
    <header className="header">
      <Logo logo={logo} />
      <nav className="header_navbar">
        <ul>
          {anchorlinks.map((al, index) => (
            <li key={index}>
              <a href={"#" + al}>{al}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button  title="Register" />
    </header>
  );
}

export default Header;
