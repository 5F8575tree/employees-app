import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    receiveUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { receiveUsers } = usersSlice.actions;

export default usersSlice.reducer;
