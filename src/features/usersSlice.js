import { createSlice } from "@reduxjs/toolkit";
import { getInitialData } from "../utils/api";

export const initialState = {
  loading: false,
  hadErrors: false,
  value: {
    id: "",
    name: "",
    avatarURL: "",
    answers: {},
    questions: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    receiveUsers: (state) => {
      state.loading = true;
    },
    receiveUsersSuccess: (state) => {
      state.value = {
        id: "",
        name: "",
        avatarURL: "",
        answers: {},
        questions: [],
      };
      state.loading = false;
      state.hadErrors = false;
    },
    receiveUsersFailure: (state) => {
      state.loading = false;
      state.hadErrors = true;
    },
  },
});

export const { receiveUsers, receiveUsersSuccess, receiveUsersFailure } =
  userSlice.actions;

export const getUsers = (state) => state.value;

export default userSlice.reducer;

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(receiveUsers());

    try {
      const response = await fetch(getInitialData);
      const data = await response.json();

      dispatch(receiveUsersSuccess(data));
    } catch (error) {
      dispatch(receiveUsersFailure());
    }
  };
}
