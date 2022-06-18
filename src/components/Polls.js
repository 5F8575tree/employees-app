import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Polls = () => {
  const questions = useSelector((state) => state.questions.questions);
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const users = useSelector((state) => state.users.users);

  return (
    <div className="dashboard" id="dashboard">
      <div className="new-polls">
        <h2 className="polls-header">New Questions</h2>
        <ul className="new-poll-list">
          <div className="card-container">
            {/* TODO: Filter the questions object with the condition and then map over it to avoid not returning a value */}
            {Object.keys(questions).map((question) => {
              if (!users[authedUser]?.answers[question]) {
                return (
                  <Card
                    image={users[questions[question].author].avatarURL}
                    date={questions[question].timestamp}
                    author={questions[question].author}
                    id={questions[question].id}
                    key={questions[question].id}
                  />
                );
              }
            })}
          </div>
        </ul>
      </div>
      <div className="completed-polls">
        <h2 className="polls-header">Answered Questions</h2>
        <ul className="answered-poll-list">
          <div className="card-container">
            {/* TODO: Filter the questions object with the condition and then map over it to avoid not returning a value */}
            {Object.keys(questions).map((question) => {
              if (users[authedUser]?.answers[question]) {
                return (
                  <Card
                    image={users[questions[question].author].avatarURL}
                    date={questions[question].timestamp}
                    author={questions[question].author}
                    id={questions[question].id}
                    key={questions[question].id}
                  />
                );
              }
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Polls;
