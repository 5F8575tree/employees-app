import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const authedUser = useSelector((state) => state.authedUser);
  console.log(authedUser);

  //we need a handle submit function that sets the authedUser state
  //and redirects to the dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("authedUser: " + authedUser);
  };

  return (
    <div className="center">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {/* <Link to="/dashboard"> */}
        <button className="btn" type="submit">
          Login
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default LoginForm;
