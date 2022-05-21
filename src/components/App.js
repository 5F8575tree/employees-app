import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Dashboard from "../views/Dashboard";
import PollPage from "../views/PollPage";
import CreatePoll from "../views/CreatePoll";
import Leaderboard from "../views/Leaderboard";
import "../styles/index.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/poll-page" element={<PollPage />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
