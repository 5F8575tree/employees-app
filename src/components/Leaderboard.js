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
          <h2 className="leaderboard-title">User Ranking</h2>
          <div className="user-name">
            {Object.keys(users).map((user) => (
              <div className="user" key={user}>
                {Object.keys(users).indexOf(user) + 1}. {users[user].name}
              </div>
            ))}
          </div>
        </div>
        <div className="users-container">
          <h2>Questions</h2>
          <div className="user-answers">
            {Object.keys(users).map((user) => (
              <div className="user" key={user}>
                {users[user].name} created: {users[user].questions.length}{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="users-container">
          <h2>Answers</h2>
          <div className="user-answers">
            {Object.keys(users).map((user) => (
              <div className="user" key={user}>
                {users[user].name} answered:{" "}
                {Object.keys(users[user].answers).length}{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardComp;
