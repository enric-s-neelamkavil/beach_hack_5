import React from "react";
import Eventcard from "./Eventcard/Eventcard";
import "./Events.css";
import { event, games } from "./Eventdata";
import Gamecard from "./Gamecard/Gamecard";

function Events() {
  return (
    <div className="events_wrapper">
      <div className="events_wrapper_inner_wrapper">
        <div>
          <h2>Events</h2>
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
        <div>
          <h2>Games</h2>
          {games.map((game) => (
            <Gamecard
              image={game.image}
              title={game.title}
              url={game.url}
              isActive={game.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
