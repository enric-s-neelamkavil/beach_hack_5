import React from "react";
import "./Schedule.css";
import Schedulesingle from "./Schedulesingle/Schedulesingle";
import { data } from "./Scheduledata";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function Schedule() {
  return (
    <div className="dashboard_schedule_wrapper">
      <Sectiontitle title="SCHEDULE" />
      <div className="dashboard_schedule_inner_wrapper" id="schedule">
        {data.map((dat, index) => (
          <Schedulesingle
            date={dat.date}
            title={dat.title}
            description={dat.description}
            flag={dat.flag}
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Schedule;
