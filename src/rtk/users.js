import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
  questions: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersStart: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export default userSlice.reducer;
