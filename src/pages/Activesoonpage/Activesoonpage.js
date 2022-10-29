import React from "react";
import Button from "../../components/Button/Button";
import Devfoliobutton from "../../components/Devfoliobutton/Devfoliobutton";
import "./Activesoonpage.css";

function Activesoonpage() {
  return (
    <div className="active_soon_wrapper">
      <span>The website will be active soon</span>
      <Devfoliobutton />
      <Button title="Go Back" url="/" />
    </div>
  );
}

export default Activesoonpage;
