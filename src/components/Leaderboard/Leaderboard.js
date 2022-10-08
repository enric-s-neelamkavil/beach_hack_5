import React from "react";
import "./Leaderboard.css";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import firstcontent from "../../assets/images/firstcontent.png";
import secondcontent from "../../assets/images/secondcontent.png";
import thirdcontent from "../../assets/images/thirdcontent.png";

function Leaderboard() {
  return (
    <div className="leaderboard_wrapper" id="leaderboard">
      <div className="leaderboard_wrapper_inner_wrapper">
        <div className="podium third">
          <img src={third} alt="" className="podium_absolute_image" />

          <img src={thirdcontent} alt="" className="podium_content_image" />
        </div>
        <div className="podium first">
          <img src={first} alt="" className="podium_absolute_image" />

          <img src={firstcontent} alt="" className="podium_content_image" />
        </div>
        <div className="podium second">
          <img src={second} alt="" className="podium_absolute_image" />

          <img src={secondcontent} alt="" className="podium_content_image" />
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
