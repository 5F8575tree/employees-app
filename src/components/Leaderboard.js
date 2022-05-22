import React from "react";
import { useSelector } from "react-redux";

const LeaderboardComp = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <div className="leaderboard-container">
      <div className="header">
        <h1>Current Leaderboard</h1>
      </div>
      <div className="results-container">
        <div className="users-container">
          <h2 className="user-name">User Ranking</h2>
          <div className="user">1. {users[Object.keys(users)[0]].name}</div>
          <div className="user">2. {users[Object.keys(users)[1]].name}</div>
          <div className="user">3. {users[Object.keys(users)[2]].name}</div>
          <div className="user">4. {users[Object.keys(users)[3]].name}</div>
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
