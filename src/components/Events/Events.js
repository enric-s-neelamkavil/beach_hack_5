import React from "react";
import Eventcard from "./Eventcard/Eventcard";
import "./Events.css";
import { event } from "./Eventdata";

function Events() {
  return (
    <div className="events_wrapper">
      <div className="events_wrapper_inner_wrapper">
        <h2>Events</h2>
        <div>
          {event.map((eve) => (
            <Eventcard
              image={eve.image}
              title={eve.title}
              description={eve.description}
              url={eve.url}
              isActive={eve.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
