import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/helpers";

const Card = () => {
  const questions = useSelector((state) => state.questions.questions);
  console.log(questions);

  return (
    <div className="card-container">
      {Object.keys(questions).map((question) => (
        <div className="card" key={question}>
          <div className="card-header">
            <div className="card-header-item">
              <h2>{questions[question].author}</h2>
              <h4>{formatDate(questions[question].timestamp)}</h4>
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
