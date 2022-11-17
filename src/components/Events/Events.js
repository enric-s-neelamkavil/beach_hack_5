import React, { useState } from "react";
import Eventcard from "./Eventcard/Eventcard";
import "./Events.css";
import Gamecard from "./Gamecard/Gamecard";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function Events({ event, games }) {
  return (
    <div className="events_wrapper" id="happenings">
      <div className="events_wrapper_inner_wrapper">
        <Sectiontitle title="HAPPENINGS" />
        <div>
          {event
            .map((eve,index) => (
              <Eventcard
              key={index}
                image={eve.image}
                title={eve.title}
                description={eve.description}
                url={eve.url}
                isActive={eve.isActive}
              />
            ))
            .reverse()}
        </div>
        <div>
          {games.map((game,index) => (
            <Gamecard
            key={index}
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
