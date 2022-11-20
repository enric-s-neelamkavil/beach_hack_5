import React from "react";
import "./Theme.css";
import { questions } from "./Questiondata";

function Theme() {
  return (
    <div className="theme_wrapper">
      <div className="theme_inner_wrapper">
        <div className="theme_title_wrapper">
          <h2>Theme : </h2>
          <p className="themeTitle">MARINE AND FISHERIES</p>
          <span className="absoluteSpan">*The above mentioned theme is only for the first selection process.</span>

        </div>
        <div className="theme_problem_wrapper">
          <div className="problemAbsoluteDiv">
            <span>Problem statements will be released on 27th November 2022</span>
            <span>Participants can also opt for their own problem statements</span>
          </div>
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
