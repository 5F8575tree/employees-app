import React from "react";

const Add = () => {
  return (
    <div className="container">
      <h2 className="create-poll-title">Create a Poll</h2>
      <div className="poll-container">
        <div className="create-poll-question">
          <h2>Would you rather?</h2>
        </div>
        <div className="create-poll-answer-container">
          <input
            className="create-poll-input"
            type="text"
            placeholder="Input your 'Option One' text here"
          />
          <input
            className="create-poll-input"
            type="text"
            placeholder="Input your 'Option Two' text here"
          />
          <button className="create-poll-button">Create Poll</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
