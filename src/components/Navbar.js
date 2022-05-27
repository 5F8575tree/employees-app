import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const users = useSelector((state) => state.users.users);

  const keys = Object.keys(users).map((user) => {
    return {
      name: users[user].name,
      avatarURL: users[user].avatarURL,
      id: user,
    };
  });

  //set the avatarURL to reflect the logged in user
  const naming = keys.map((user) => {
    return user.id;
  });
  const stringNaming = naming.toString();
  const authedUserName = authedUser.toString();
  const authedUserMatch = stringNaming.match(authedUserName);
  const avatarURL = keys.map((user) => {
    if (authedUserMatch[0] === user.id) {
      return { url: user.avatarURL };
    } else {
      return null;
    }
  });
  const avatarURLMatch = avatarURL.filter((url) => {
    return url !== null;
  });

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
              src={avatarURLMatch[0].url}
              alt="user avatar"
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
