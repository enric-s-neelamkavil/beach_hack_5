import React from "react";
import "./Header.css";

function Header({ anchorlinks }) {
  console.log(anchorlinks);
  return (
      <nav className="header_navbar">
        <ul>
          {anchorlinks.map((al) => (
            <li>
              <a href={"#" + al}>{al}</a>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Header;
