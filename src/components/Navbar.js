import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/ktg2-final2arctic.png";

const Navbar = () => {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authedUser");
    navigate("/");
  };

  return (
    <div className="navbar">
      <nav>
        <img src={logo} />
        <ul className="navbar-items">
          <li>
            <Link to="/dashboard">
              <p className="nav-link">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/leaderboard">
              <p className="nav-link">Leaderboard</p>
            </Link>
          </li>
          <li>
            <Link to="/add">
              <p className="nav-link">Add Question</p>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <p className="nav-link">Sign Out</p>
          </li>
        </ul>
      </nav>
      <div className="user-info">
        <img
          className="nav-avatar"
          alt="user avatar"
          //show only the avatar of the autherUser (basically easy way to connect user data to the authedUser data)
          src={users[authedUser]?.avatarURL}
        />
        <p className="nav-name">Welcome, {users[authedUser]?.name}!</p>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="nav-right">
<ul className="navbar-items">
  <li className="nav-item-right">
    <img
      className="nav-avatar"
      alt="user avatar"
      //show only the avatar of the autherUser (basically easy way to connect user data to the authedUser data)
      src={users[authedUser]?.avatarURL}
    />
  </li>
  <li className="nav-item-right">
    <Link to="/">
      <button className="logout-btn">Logout</button>
    </Link>
  </li>
</ul>
</div> */
}
