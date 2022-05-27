import { createSlice } from "@reduxjs/toolkit";
import authedUser from "./authedUser";

export const initialState = {
  users: [
    {
      isLoggedIn: false,
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { receiveUsers, isLoggedIn } = userSlice.actions;

export default userSlice.reducer;
