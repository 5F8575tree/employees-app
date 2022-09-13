import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Polls = () => {
  const questions = useSelector((state) => state.questions.questions);
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const users = useSelector((state) => state.users.users);

  const switchViews = (e) => {
    const answered = document.getElementsByClassName("answered-poll-list");
    const unanswered = document.getElementsByClassName("new-poll-list");
    if (e.target.id === "answered") {
      for (let i = 0; i < answered.length; i++) {
        answered[i].style.display = "block";
      }
      for (let i = 0; i < unanswered.length; i++) {
        unanswered[i].style.display = "none";
      }
    } else if (e.target.id === "unanswered") {
      for (let i = 0; i < answered.length; i++) {
        answered[i].style.display = "none";
      }
      for (let i = 0; i < unanswered.length; i++) {
        unanswered[i].style.display = "block";
      }
    } else {
      // default view is unanswered
      for (let i = 0; i < answered.length; i++) {
        answered[i].style.display = "none";
      }
      for (let i = 0; i < unanswered.length; i++) {
        unanswered[i].style.display = "block";
      }
    }
  };

  return (
    <div className="dashboard" id="dashboard">
      <div className="switch-btns">
        <button id="unanswered" onClick={switchViews}>View Unanswered</button>
        <button id="answered" onClick={switchViews}>View Answered</button>
      </div>
      <div className="new-polls">
        <h2 className="polls-header">New Questions</h2>
        <ul className="new-poll-list">
          <div className="card-container">
            {/* order by timestamp */}
            {Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp).map((question) => {
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
              return null
            })}
          </div>
        </ul>
      </div>
      <div className="completed-polls">
        <h2 className="polls-header">Answered Questions</h2>
        <ul className="answered-poll-list">
          <div className="card-container">
            {Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp).map((question) => {
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
              return null;
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Polls;
