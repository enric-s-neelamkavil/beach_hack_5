import React from "react";
import "./Jumparrow.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

function Jumparrowright({ route }) {
  return (
    <Link to={route} className="jumparrow_wrapper jumparrowright_wrapper">
      <AiOutlineDoubleRight />
    </Link>
  );
}

export default Jumparrowright;
