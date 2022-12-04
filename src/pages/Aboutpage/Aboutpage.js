import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Hamburger from "../../components/Hamburger/Hamburger";
import Header from "../../components/Header/Header";
import Team from "../../components/Team/Team";
import Sidenav from "../../components/Sidenav/Sidenav";
import Jumparrowleft from "../../components/Jumparrow/Jumparrowleft";
import Bottomnav from "../../components/Bottomnav/Bottomnav";
import { useLocation } from "react-router-dom";
import './Aboutpage.css'
import { team } from "../../components/Team/Teamdata";
import Loading from '../../Loading'


function Aboutpage() {

  const [imgsLoaded, setImgsLoaded] = useState(false)

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.image
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(team.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])
  return (
    // <>
    // {imgsLoaded?(
    //   <div className="aboutpage_wrapper">
    //   <Hamburger
    //     anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
    //   />
    //   <Sidenav />
    //   <Jumparrowleft route="/sponsors" />
    //   <Team team={team}/>
    //   <Footer />
    // </div>
    // ):(
    //   <Loading />
    // )}
    
    // </>
    <div className="aboutpage_wrapper">
      <Hamburger
        anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
      />
      <Sidenav />
      <Jumparrowleft route="/sponsors" />
      <Team team={team}/>
      <Footer />
    </div>
  );
}

export default Aboutpage;
