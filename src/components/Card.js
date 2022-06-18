import React from "react";
import { formatDate } from "../utils/helpers";

const Card = ({ image, date, author, id }) => {
  //when the button is clicked send the user to the question page with the corresponding id
  const handleClick = () => {
    window.location.href = `/questions/${id}`;
  };

  return (
    <div className="card">
      <div className="card-info">
        <img src={image} alt="user-avatar" className="poll-avatar" />
        <h2 className="poll-author">{author}</h2>
        <h4 className="poll-timestamp">{formatDate(date)}</h4>
        <div className="card-btn">
          <div onClick={handleClick}>
            <button className="poll-btn">View Poll</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
