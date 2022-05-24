import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  authedUser: null,
};

const userSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    setAuthedUser: (state, action) => {
      state.user = action.payload;
    },
    removeAuthedUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { setAuthedUser, removeAuthedUser } = userSlice.actions;

export default userSlice.reducer;
