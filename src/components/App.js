import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Dashboard from "../views/Dashboard";
import PollPage from "../views/PollPage";
import CreatePoll from "../views/CreatePoll";
import Leaderboard from "../views/Leaderboard";
import "../styles/index.css";
import { useDispatch } from "react-redux";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "../features/users";
import { receiveQuestions } from "../features/questions";
import { setAuthedUser } from "../features/authedUser";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getInitialData();
      console.log(data);
      dispatch(receiveUsers(data.users));
      dispatch(receiveQuestions(data.questions));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("authedUser")) {
      dispatch(setAuthedUser(localStorage.getItem("authedUser")));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/poll-page" element={<PollPage />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
