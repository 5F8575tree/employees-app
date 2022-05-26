import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  authedUser: null,
};

const userSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    setAuthedUser: (state, action) => {
      state.authedUser = action.payload;
    },
    removeAuthedUser: (state, action) => {
      state.authedUser = null; //logoutSuccess
    },
  },
});

export const { setAuthedUser, removeAuthedUser } = userSlice.actions;

export default userSlice.reducer;
