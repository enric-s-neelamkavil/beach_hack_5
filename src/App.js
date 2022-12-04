import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedulepage from "./pages/Schedulepage/Schedulepage";
import Leaderboardpage from "./pages/Leaderboard/Leaderboardpage";
import Sponsorspage from "./pages/Sponsorspage/Sponsorspage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Activesoonpage from "./pages/Activesoonpage/Activesoonpage";
import Bottomnav from "./components/Bottomnav/Bottomnav";
import Header from "./components/Header/Header";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header
          anchorlinks={["home", "schedule", "leaderboard", "sponsors", "about"]}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedulepage />} />
          <Route path="/leaderboard" element={<Leaderboardpage />} />
          <Route path="/sponsors" element={<Sponsorspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Bottomnav />
      </BrowserRouter>
    </>
  );
}
export default App;
