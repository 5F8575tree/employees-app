import React from "react";
import { useSelector } from "react-redux";

const LeaderboardComp = (props) => {
  const users = useSelector((state) => state.users.users);
  console.log(users);

  //we need a function to get the number of answers from the users object and push this to update the state
  const ranking = Object.keys(users).map((user) => {
    return {
      name: users[user].name,
      avatarURL: users[user].avatarURL,
      answers: Object.keys(users[user].answers).length,
      questions: users[user].questions.length,
    };
  });

  //we need to sort the ranking array by the number of answers and questions combined
  ranking.sort((a, b) => {
    return b.answers + b.questions - (a.answers + a.questions);
  });

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>Leaderboard</h2>
      </div>
      <div className="results-container">
        {ranking.map((user) => (
          <div className="users-container" key={user.name}>
            <div className="user">
              <img
                className="leaderboard-avatar"
                src={user.avatarURL}
                alt={user.name}
              />
              <h3 className="leaderboard-username">{user.name}</h3>
              <button className="user-scores">
                <div className="leaderboard-answers">
                  <h5> ANSWERS: {user.answers}</h5>
                </div>
                <div className="leaderboard-questions">
                  <h5> QUESTIONS: {user.questions}</h5>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardComp;
