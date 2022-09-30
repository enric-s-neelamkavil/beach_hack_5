import React from "react";
import "./Schedule.css";
import Schedulesingle from "./Schedulesingle/Schedulesingle";
import { data } from "./Scheduledata";

function Schedule() {
  return (
    <div className="dashboard_schedule_wrapper" id="schedule">
      {data.map((dat) => (
        <Schedulesingle
          date={dat.date}
          title={dat.title}
          description={dat.description}
          flag={dat.flag}
        />
      ))}
    </div>
  );
}

export default Schedule;
