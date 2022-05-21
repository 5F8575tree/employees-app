import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="center">
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/dashboard">
          <button className="btn" type="submit">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
