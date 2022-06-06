import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const users = useSelector((state) => state.users.users);

  return (
    <nav>
      <div className="nav-left">
        <ul className="navbar-items">
          <li className="nav-item-left">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item-left">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item-left">
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="nav-item-left">
            <Link to="/create-poll">Create New Poll</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="navbar-items">
          <li className="nav-item-right">
            <img
              className="nav-avatar"
              alt="user avatar"
              //show only the avatar of the autherUser (basically easy way to connect user data to the authedUser data)
              src={users[authedUser].avatarURL}
            />
          </li>
          <li className="nav-item-right">
            <Link to="/">
              <button className="logout-btn">Logout</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
