import React from "react";
import Eventcard from "./Eventcard/Eventcard";
import "./Events.css";

function Events() {
  return (
    <div className="events_wrapper">
      <div className="events_wrapper_inner_wrapper">
        <h2>Events</h2>
        <div>
          <Eventcard />
        </div>
      </div>
    </div>
  );
}

export default Events;
