import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <Link to="/home" className="explore_more_semi">
      <span>DIVE IN</span>
    </Link>
  );
}
