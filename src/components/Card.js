import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Title</h2>
        <h3>Timestamp</h3>
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
