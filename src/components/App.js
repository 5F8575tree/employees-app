import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Dashboard from "../views/Dashboard";
import PollPage from "../views/PollPage";
import CreatePoll from "../views/CreatePoll";
import Leaderboard from "../views/Leaderboard";
import "../styles/index.css";
import { ROUTES } from "../utils/enums";

const App = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />

        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path="/questions/:id" element={<PollPage />} />
        <Route path="/add" element={<CreatePoll />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
