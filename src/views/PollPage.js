import React from "react";
import Navbar from "../components/Navbar";
import PollQuestion from "../components/PollQuestion";

const PollPage = () => {
  return (
    <div className="header">
      <Navbar />
      <PollQuestion />
    </div>
  );
};

export default PollPage;
