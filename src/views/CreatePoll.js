import React from "react";
import Navbar from "../components/Navbar";

const CreatePoll = () => {
  return (
    <div>
      <Navbar />
      <div className="poll-page-container">
        <h2 className="create-poll-title">Create a Poll</h2>
        <h3 className="create-poll-subtitle">Would you rather...</h3>
        <div className="create-poll-container">
          <input
            className="create-poll-input"
            type="text"
            placeholder="Answer One"
          />
          <input
            className="create-poll-input"
            type="text"
            placeholder="Answer Two"
          />
          <button className="create-poll-button">Create Poll</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePoll;
