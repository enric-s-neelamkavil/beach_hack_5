import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedulepage from "./pages/Schedulepage/Schedulepage";
import Leaderboardpage from "./pages/Leaderboard/Leaderboardpage";
import Sponsorspage from "./pages/Sponsorspage/Sponsorspage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Activesoonpage from "./pages/Activesoonpage/Activesoonpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedulepage />} />
        <Route path="/leaderboard" element={<Leaderboardpage />} />
        <Route path="/sponsors" element={<Sponsorspage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
