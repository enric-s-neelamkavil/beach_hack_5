import React from "react";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import "./Team.css";
import Teamcard from "./Teamcard/Teamcard";

function Team({team}) {
  return (
    <div className="team_wrapper">
      <Sectiontitle title="TEAM" />
      <div className="team_inner_wrapper">
        {team.map((tm) => (
          <Teamcard
            image={tm.image}
            name={tm.name}
            designation={tm.designation}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
