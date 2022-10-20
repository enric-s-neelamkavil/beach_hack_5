import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Hamburger from "../../components/Hamburger/Hamburger";
import Schedule from "../../components/Schedule/Schedule";
import Sidenav from "../../components/Sidenav/Sidenav";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import { event, games } from "../../components/Events/Eventdata";
import { sponsor } from "../../components/Sponsors/Sponsordata";
import Loading from "../../Loading";

function Dashboard() {
  const [loading, isLoading] = useState(true);
  const images = [];
  useEffect(() => {
    event.map((eve) => {
      images.push(eve.image);
    });
    games.map((game) => {
      images.push(game.image);
    });
    sponsor.map((spon) => {
      spon.sponsorlist.map((sl) => {
        images.push(sl.img);
      });
    });
    cacheImages(images);
  }, []);
  const cacheImages = async (array) => {
    const promises = await array.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    isLoading(false);
  };
  return (
    <>
      {!loading ? (
        <div className="dashboard_wrapper">
          <Hamburger
            anchorlinks={[
              "home",
              "happenings",
              "schedule",
              "leaderboard",
              "sponsors",
              // "about",
            ]}
          />
          <Header
            anchorlinks={[
              "home",
              "happenings",
              "schedule",
              "leaderboard",
              "sponsors",
              // "about",
            ]}
          />
          <Home />
          <Events event={event} games={games} />
          <Schedule />
          <Sidenav />
          <Leaderboard />
          <Sponsors sponsor={sponsor} />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Dashboard;
