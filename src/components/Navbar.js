import { Link } from "react-router-dom";

const Navbar = () => {
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
              src="https://avatars0.githubusercontent.com/u/52709824?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d&v=4"
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
