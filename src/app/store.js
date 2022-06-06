import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users";
import authedUserReducer from "../features/authedUser";
import questionReducer from "../features/questions";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    users: userReducer,
    authedUser: authedUserReducer,
    questions: questionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
