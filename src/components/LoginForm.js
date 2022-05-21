import React from "react";

const LoginForm = () => {
  return (
    <div className="login-form">
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
