import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Hamburger from "../../components/Hamburger/Hamburger";
import Sidenav from "../../components/Sidenav/Sidenav";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import { event, games } from "../../components/Events/Eventdata";
import Loading from "../../Loading";
import Jumparrowright from "../../components/Jumparrow/Jumparrowright";
import Association from "../../components/Association/Association"; 
import Bottomnav from "../../components/Bottomnav/Bottomnav";

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
    await Promise.all(promises).then(() => {
      isLoading(false);
    });
  };
  return (
    <>
      {!loading ? (
        <div className="dashboard_wrapper">
          <Hamburger
            anchorlinks={[
              "home",
              "schedule",
              "leaderboard",
              "sponsors",
              "about",
            ]}
          />
          <Header
            anchorlinks={[
              "home",
              "schedule",
              "leaderboard",
              "sponsors",
              "about",
            ]}
          />
          <Sidenav />
          <Bottomnav />
          <Jumparrowright route="/schedule" />
          <Home />
          <Association />
          <Events event={event} games={games} />
          <Leaderboard />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Dashboard;
