import React from "react";
import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Card = ({ image, date, author, id }) => {
  const navigate = useNavigate()

  // TODO: we need the question id to pass it to questions/:id, or 404 if it doesn't exist
  const handleClick = () => {
    if (id) {
      navigate(`/questions/${id}`)
    } else {
      navigate("/404")
    }
  }

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
