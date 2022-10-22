import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedulepage from "./pages/Schedulepage/Schedulepage";
import Leaderboardpage from "./pages/Leaderboard/Leaderboardpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedulepage />} />
        <Route path="/leaderboard" element={<Leaderboardpage />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
