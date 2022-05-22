import React from "react";
import Navbar from "../components/Navbar";
import LeaderboardComp from "../components/Leaderboard";

const Leaderboard = () => {
  return (
    <div className="header">
      <Navbar />
      <LeaderboardComp />
    </div>
  );
};

export default Leaderboard;
