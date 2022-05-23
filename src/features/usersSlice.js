import { createSlice } from "@reduxjs/toolkit";
import { getInitialData } from "../api";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then((data) => {
      dispatch(receiveUsers(data.users));
    });
  };
}

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: {},
  },
  reducers: {
    receiveUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { receiveUsers } = usersSlice.actions;

export default usersSlice.reducer;
