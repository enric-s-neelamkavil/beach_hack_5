import React from "react";
import { Link } from "react-router-dom";
import "./Jumparrow.css";
import { AiOutlineDoubleLeft } from "react-icons/ai";

function Jumparrowleft({ route }) {
  return (
    <Link to={route} className="jumparrow_wrapper jumparrowleft_wrapper">
      <AiOutlineDoubleLeft />
    </Link>
  );
}

export default Jumparrowleft;
