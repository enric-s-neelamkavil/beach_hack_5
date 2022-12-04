import React from "react";
import "./Jumparrow.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

function Jumparrowright({ route }) {
  return (
    <Link to={route} className="jumparrow_wrapper jumparrowright_wrapper">
      <AiOutlineDoubleRight />
      {/* <i className={`fi fi-br-angle-double-small-right`}></i> */}
    </Link>
  );
}

export default Jumparrowright;
