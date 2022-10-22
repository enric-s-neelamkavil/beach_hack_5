import React from "react";
import "./Jumparrow.css";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

function Jumparrowright({ route }) {
  return (
    <Link to={route} className="jumparrow_wrapper jumparrowright_wrapper">
      <AiFillCaretRight />
    </Link>
  );
}

export default Jumparrowright;
