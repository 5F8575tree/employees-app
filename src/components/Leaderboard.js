import React from "react";
import { useSelector } from "react-redux";

const LeaderboardComp = () => {
  const { users } = useSelector((state) => state.users);

  //we need a function that calculates the number of objects in an object
  const count = (obj) => {
    return Object.keys(obj).length;
  };

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
          <div className="user">
            {count(users[Object.keys(users)[0]].answers)}
          </div>
          <div className="user">
            {count(users[Object.keys(users)[1]].answers)}
          </div>
          <div className="user">
            {count(users[Object.keys(users)[2]].answers)}
          </div>
          <div className="user">
            {count(users[Object.keys(users)[3]].answers)}
          </div>
        </div>
        <div className="users-container">
          <h2 className="user-created">Created</h2>
          <div className="user">
            {count(users[Object.keys(users)[0]].questions)}
          </div>
          <div className="user">
            {count(users[Object.keys(users)[1]].questions)}
          </div>
          <div className="user">
            {count(users[Object.keys(users)[2]].questions)}
          </div>
          <div className="user">
            {count(users[Object.keys(users)[3]].questions)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardComp;
