import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../features/authedUser";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.users.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password, userList);
    //if input matches a user in the userList and password matches the password in the userList, set the authedUser to the user's id
    if (userList[userName].password === password) {
      dispatch(setAuthedUser(userName));
      localStorage.setItem("authedUser", userName);
      navigate("/Dashboard");
    }
  };

  return (
    <div className="split_screen">
      <div className="right">
        <section className="copy">
          <div className="center">
            <div className="login-form">
              <h1>Login</h1>
              <form method="post" onSubmit={handleSubmit}>
                <div className="txt_field">
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                  <span></span>
                  <label>Username</label>
                </div>
                <div className="txt_field">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <span></span>
                  <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login"></input>
                <div className="signup_link">
                  Not a member? <a href="#">Signup</a>
                </div>
                <div className="copy_legal">
                  <p>
                    <span className="small">
                      Copyright 2022 | View our <a href="#">Privacy Policy</a>{" "}
                      &amp; <a href="#">Terms and Conditions</a>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
