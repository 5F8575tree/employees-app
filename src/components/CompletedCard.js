import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/helpers";

const Card = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="card-container">
      {Object.keys(questions).map((question) => (
        <div className="card" key={question}>
          <div className="card-header">
            <div className="card-header-item">
              <img
                src={users[questions[question].author].avatarURL}
                alt="user-avatar"
                className="poll-card-avatar"
              />
              <h2 className="poll-author">{questions[question].author}</h2>
              <h4 className="poll-timestamp">
                {formatDate(questions[question].timestamp)}
              </h4>
            </div>
          </div>
          <div className="card-body">
            <Link to="/poll-page">
              <button className="poll-btn">Answer This Poll</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
