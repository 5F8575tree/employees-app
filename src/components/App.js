import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Dashboard from "../views/Dashboard";
import PollPage from "../views/PollPage";
import CreatePoll from "../views/CreatePoll";
import Leaderboard from "../views/Leaderboard";
import "../styles/index.css";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/poll-page" element={<PollPage />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default connect()(App);
