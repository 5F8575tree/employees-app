import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveUsers: (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    },
  },
});

export const { receiveUsers } = userSlice.actions;

export default userSlice.reducer;
