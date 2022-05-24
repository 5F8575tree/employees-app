import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  questions,
  users,
  authedUser,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
