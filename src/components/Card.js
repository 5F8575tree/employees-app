import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const Card = ({ image, date, author }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-item">
          <img src={image} alt="user-avatar" className="poll-card-avatar" />
          <h2 className="poll-author">{author}</h2>
          <h4 className="poll-timestamp">{formatDate(date)}</h4>
        </div>
      </div>
      <div className="card-body">
        <Link to="/poll-page">
          <button className="poll-btn">Answer This Poll</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
