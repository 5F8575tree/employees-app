import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../features/authedUser";

const LoginForm = () => {
  //we need to create a form that will dispatch the authedUser action
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);

  const handleChange = (e) => {
    e.preventDefault();
    const user = e.target.value;
    //we need to dispatch the action if the input matches a user
    if (
      user === "tylermcginnis" ||
      user === "sarahedo" ||
      user === "zoshikanlu" ||
      user === "mtsamis"
    ) {
      dispatch(setAuthedUser(user));
    } else {
      dispatch(setAuthedUser(null));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if the authedUser is null, prompt with alert
    console.log("After dispatch: ", authedUser);
    console.log("After dispatch users: ", users);
    navigate("/dashboard");
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">
            tylermcginnis / mtsamis / sarahedo / zoshikanlu{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
