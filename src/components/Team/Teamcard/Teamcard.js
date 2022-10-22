import React from "react";
import "./Teamcard.css";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";

function Teamcard({ image, name, designation }) {
  return (
    <div className="team_card">
      <img src={image} className="team_card_image" loading="lazy" />
      <div className="team_card_content_wrapper">
        <div className="team_card_details_wrapper">
          <span className="name">{name}</span>
          <span>{designation}</span>
        </div>
        {/* <div className="social_links_wrapper">
          <a href="">
            <TbBrandLinkedin />
          </a>
          <a href="">
            <TbBrandGithub />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Teamcard;
