import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ anchorlinks }) {
  console.log(anchorlinks);
  return (
    <header className="header">
      <img src="" alt="" className="header_logo" />
      <nav className="header_navbar">
        <ul>
          {anchorlinks.map((al) => (
            <li>
              <a href={"#" + al}>{al}</a>
            </li>
          ))}
          <li className="header_register_button">
            <a href="">REGISTER</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
