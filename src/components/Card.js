import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const Card = ({ image, date, author }) => {
  return (
    <div className="card">
      <div className="card-info">
        <img src={image} alt="user-avatar" className="poll-avatar" />
        <h2 className="poll-author">{author}</h2>
        <h4 className="poll-timestamp">{formatDate(date)}</h4>
        <div className="card-btn">
          <Link to="/poll-page">
            <button className="poll-btn">View Poll</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
