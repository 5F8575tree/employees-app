import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, getUsers } from "../features/usersSlice";

const LeaderboardComp = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  //we need a function that calculates the number of objects in an object
  // const count = (obj) => {
  //   return Object.keys(obj).length;
  // };

  return (
    <div className="leaderboard-container">
      <div className="header">
        <h1>Current Leaderboard</h1>
      </div>
      <div className="results-container">
        <div className="users-container">
          <h2 className="user-name">User Ranking</h2>
          <div className="user-name"></div>
        </div>
      </div>
      <div className="users-container">
        <h2 className="user-answers">Answers</h2>
      </div>
      <div className="users-container">
        <h2 className="user-created">Created</h2>
      </div>
    </div>
  );
};

export default LeaderboardComp;
