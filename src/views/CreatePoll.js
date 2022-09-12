import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatePoll = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.authedUser);

  useEffect(() => {
    user.authedUser != null ?
      console.log("hb")
      :
      navigate("/")
  }, [navigate, user.authedUser])

  return (
    <div>
      <Navbar />
      <Add />
    </div>
  );
};

export default CreatePoll;
