import React from "react";
import "./Theme.css";
import { questions } from "./Questiondata";

function Theme() {
  return (
    <div className="theme_wrapper">
      <div className="theme_inner_wrapper">
        <div className="theme_title_wrapper">
          <h2>Theme : </h2>
          <p>This is a test theme which is pretty long to test.</p>
        </div>
        <div className="theme_problem_wrapper">
          <h2>Problem Statements : </h2>
          <ul className="problem_list">
            {questions.map((problems,index) => (
              <li key={index}>{problems}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Theme;
