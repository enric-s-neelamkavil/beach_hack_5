import React from "react";
import "./Schedulesingle.css";

function Schedulesingle({ date, title, description, flag }) {
  return (
    <div className="schedule_single_wrapper">
      <div
        className={
          "schedule_single_wrapper_content_wrapper " +
          (flag ? "schedule_single_wrapper_content_wrapper_left" : "")
        }
      >
        <div
          className={
            "schedule_single_wrapper_path " +
            (flag ? "schedule_single_wrapper_path_left" : "")
          }
        >
          <div className="schedule_single_wrapper_path_big_round">
            <div className="schedule_single_wrapper_path_big_round_small_round"></div>
          </div>
        </div>
        <span>{date}</span>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default Schedulesingle;
