import React from "react";
import Navbar from "../components/Navbar";
import Polls from "../components/Polls";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const authedUser = useSelector((state) => state.authedUser);
  console.log(authedUser);

  return (
    <div className="header">
      <Navbar />
      <Polls />
    </div>
  );
};

export default Dashboard;
