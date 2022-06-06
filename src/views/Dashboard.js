import React from "react";
import Navbar from "../components/Navbar";
import Polls from "../components/Polls";

const Dashboard = () => {
  return (
    <div className="header">
      <Navbar />
      <Polls />
    </div>
  );
};

export default Dashboard;
