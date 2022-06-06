import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../features/authedUser";

const LoginForm = () => {
  //we need to allow the user to select a user to login as from a dropdown, then set that user as the authed user and dispatch the action, then navigate to the dashboard
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.users.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = e.target.elements.userId.value;
    dispatch(setAuthedUser(userId));
    navigate("/dashboard");
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">Select User</label>
          <select name="userId" id="userId">
            {Object.keys(userList).map((userId) => (
              <option key={userId} value={userId}>
                {userList[userId].name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
