import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users";
import authedUserReducer from "../features/authedUser";
import questionReducer from "../features/questions";

export const store = configureStore({
  reducer: {
    users: userReducer,
    authedUser: authedUserReducer,
    questions: questionReducer,
  },
});
