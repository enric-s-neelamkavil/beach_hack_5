import React from "react";
import "./Theme.css";
import { questions } from "./Questiondata";
import Registrationcount from "../Registrationcount/Registrationcount";
// import {register} from '../../assets/images/'

function Theme() {
  return (
    <div className="theme_wrapper">
      <div className="theme_inner_wrapper">
        <div className="theme_title_wrapper" data-aos="fade-right">
          <h1>Theme : </h1>
          <div className="theme_title_inner_wrapper">
            <h2 className="themeTitle">MARINE AND FISHERIES</h2>
            <h2 className="themeTitle">MARINE AND FISHERIES</h2>
          </div>

          <span className="absoluteSpan">
            *The above mentioned theme is only for the first selection process.
          </span>
        </div>
        <div className="theme_problem_wrapper">
          {/* <div className="problemAbsoluteDiv">
            <span>Problem statements will be released on 29th November 2022</span>
            <span>Participants can also opt for their own problem statements</span>
          </div> */}
          <h2>Problem Statements : </h2>
          <ul className="problem_list">
            {questions.map((problems, index) => (
              <li key={index} data-aos="fade-left">{problems}</li>
            ))}
          </ul>
          {/* <Registrationcount /> */}
          <a href="https://bit.ly/BH5initialpitching" target="_blank_" className="pitch_submit">Submit</a>
        </div>
      </div>
    </div>
  );
}

export default Theme;
