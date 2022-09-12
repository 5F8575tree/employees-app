import React from "react";
import Navbar from "../components/Navbar";
import Polls from "../components/Polls";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.authedUser);
  console.log(user)

  useEffect(() => {
    user.authedUser != null ?
      console.log("user is logged in")
      :
      navigate("/")
  }, [navigate, user.authedUser])

  return (
    <div className="header">
      <Navbar />
      <Polls />
    </div>
  );
};

export default Dashboard;
