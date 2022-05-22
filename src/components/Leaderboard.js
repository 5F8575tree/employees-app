import React from "react";

const LeaderboardComp = () => {
  return (
    <div className="leaderboard-container">
      <div className="header">
        <h1>Current Leaderboard</h1>
      </div>
      <div className="results-container">
        <div className="users-container">
          <h2 className="user-name">User Name</h2>
        </div>
        <div className="users-container">
          <h2 className="user-answers">Answers</h2>
        </div>
        <div className="users-container">
          <h2 className="user-created">Created</h2>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardComp;
