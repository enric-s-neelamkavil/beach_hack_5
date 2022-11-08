import React, { useEffect } from "react";
import "./Schedulepage.css";
import Hamburger from "../../components/Hamburger/Hamburger";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
import Jumparrowright from "../../components/Jumparrow/Jumparrowright";
import { useLocation } from "react-router-dom";

function Schedulepage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="schedulepage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Jumparrowright route="/leaderboard" />
      <Jumparrowleft route="/home" />
      <Sidenav />
      <Schedule />
      <Footer />
    </div>
  );
}

export default Schedulepage;
