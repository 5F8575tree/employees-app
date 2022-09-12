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

    const correct_login = () => {
      console.log("login successfull")
      dispatch(setAuthedUser(userName));

      localStorage.setItem("authedUser", userName);
      navigate("/Dashboard");
    }

    const usernames = Object.values(userList)
    usernames.map(v => v.id === userName ? v.password === password ? correct_login() : console.log("wrong password") : null)

    // If input matches a user in the userList and password matches the password in the userList, set the authedUser to the user's id
    // if (userList.userName.password === password) {
    //   dispatch(setAuthedUser(userName));

    //   localStorage.setItem("authedUser", userName);
    //   navigate("/Dashboard");
    // }
    // else { console.log("wrong credentials") }
  };

  // console.log(userList.mtsamis.password)

  return (
    <div className="split_screen">
      { }
      <div className="right">
        <section className="copy">
          <div className="center">
            <div className="login-form">
              <h1 data-testid="heading">Login</h1>
              <form method="post" onSubmit={handleSubmit}>
                <div className="txt_field">
                  <input
                    id="usernameField"
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                  <span></span>
                  <label htmlFor="usernameField">Username</label>
                </div>
                <div className="txt_field">
                  <input
                    id="passwordField"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <span></span>
                  <label htmlFor="passwordField">Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" data-testid="submitButton"></input>
                <div className="signup_link" data-testid="signupLink">
                  Not a member? <a href="/">Signup</a>
                </div>
                <div className="copy_legal">
                  <p>
                    <span className="small" data-testid="copyrightNotice">
                      Copyright 2022 | View our <a href="/">Privacy Policy</a>{" "}
                      &amp; <a href="/">Terms and Conditions</a>
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
