import React from "react";

const LeaderboardComp = () => {
  //we need a function that calculates the number of objects in an object
  // const count = (obj) => {
  //   return Object.keys(obj).length;
  // };

  return (
    <div className="leaderboard-container">
      <div className="header">
        <h1>Current Leaderboard</h1>
      </div>
      <div className="results-container">
        <div className="users-container">
          <h2 className="user-name">User Ranking</h2>
          <div className="user-name"></div>
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
