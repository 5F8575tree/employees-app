import { createSlice } from "@reduxjs/toolkit";
import { addQuestion, answerQuestion } from "../features/questions";

export const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveUsers: (state, action) => {
      state.users = action.payload;
    }
  },
  extraReducers: {
    [addQuestion]: (state, {payload: {id, author}}) => {
      state.users[author].questions.push(id)
    },
    [answerQuestion]: (state, {payload: {id, user, optionType}}) => {
      state.users[user].answers[id] = optionType
    }
  },
});

export const { receiveUsers } = userSlice.actions;

export default userSlice.reducer;
