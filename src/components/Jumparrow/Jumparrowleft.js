import React from "react";
import { Link } from "react-router-dom";
import "./Jumparrow.css";
import { AiFillCaretLeft } from "react-icons/ai";

function Jumparrowleft({ route }) {
  return (
    <Link to={route} className="jumparrow_wrapper jumparrowleft_wrapper">
      <AiFillCaretLeft />
    </Link>
  );
}

export default Jumparrowleft;
