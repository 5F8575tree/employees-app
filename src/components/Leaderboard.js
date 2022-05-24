import React from "react";
import { useSelector } from "react-redux";

const LeaderboardComp = (props) => {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  return (
    <div className="leaderboard-container">
      <div className="header">
        <h1>Current Leaderboard</h1>
      </div>
      <div className="results-container">
        <div className="users-container">
          <h2 className="user-name">User Ranking</h2>
          <div className="user-name">
            {Object.keys(users).map((user) => (
              <div className="user-container">
                <div className="user-name">{user}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="users-container">
        <h2 className="user-answers">Answers</h2>
      </div>
      <div className="users-container">
        <h2 className="user-created">Created</h2>
      </div>
    </div>
  );
};

export default LeaderboardComp;
