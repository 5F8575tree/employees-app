import React from "react";
import Navbar from "../components/Navbar";
import PollAnswer from "../components/PollAnswer";
import PollHero from "../components/PollHero";

const PollPage = () => {
  return (
    <div className="header">
      <Navbar />
      <PollHero />
      <PollAnswer />
    </div>
  );
};

export default PollPage;
