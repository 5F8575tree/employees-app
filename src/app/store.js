import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/users";
import authedUserReducer from "../features/authedUser";
import questionReducer from "../features/questions";
import logger from "redux-logger";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";


const persistConfig = {
  key: 'root',
  storage
}

const reducer = persistReducer(persistConfig, combineReducers({
  users: userReducer,
  authedUser: authedUserReducer,
  questions: questionReducer,
}))


export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store)