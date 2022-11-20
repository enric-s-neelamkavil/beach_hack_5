import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Hamburger from "../../components/Hamburger/Hamburger";
import Header from "../../components/Header/Header";
import Team from "../../components/Team/Team";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
import Bottomnav from "../../components/Bottomnav/Bottomnav";
import { useLocation } from "react-router-dom";
import './Aboutpage.css'

function Aboutpage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="aboutpage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Sidenav />
      <Jumparrowleft route="/sponsors" />
      <Team />
      <Footer />
    </div>
  );
}

export default Aboutpage;
