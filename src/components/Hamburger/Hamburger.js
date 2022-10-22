import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Logo from "../Logo/Logo";
import logo from "../../assets/images/logowhite.png";
import Button from "../Button/Button";
import "./Hamburger.css";

function Hamburger({ anchorlinks }) {
  const [triggered, setTriggered] = useState(false);
  const hamburgerTrigger = () => {
    setTriggered(!triggered);
  };
  return (
    <>
      <CgMenuRight className="hamburger" onClick={hamburgerTrigger} />
      <div
        className={
          "hamburger_wrapper " + (triggered ? "hamburger_wrapper_active" : "")
        }
      >
        <Logo logo={logo} />
        <nav className="hamburger_wrapper_navbar">
          <ul>
            {anchorlinks.map((al, index) => (
              <li key={index}>
                <a href={"/" + al} onClick={hamburgerTrigger}>
                  {al}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* <Button title="Register" /> */}
      </div>
    </>
  );
}

export default Hamburger;
