import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  questions: {},
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    receiveQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action) => {
      state.questions[action.payload.id] = action.payload;
    },
    answerQuestion: (state, action) => {
      state.questions[action.payload.id] = {
        ...state.questions[action.payload.id],
        [action.payload.answer]: {
          ...state.questions[action.payload.id][action.payload.answer],
          votes: state.questions[action.payload.id][
            action.payload.answer
          ].votes.concat([action.payload.authedUser]),
        },
      };
    },
  },
});

export const { receiveQuestions, addQuestion, answerQuestion } =
  questionSlice.actions;

export default questionSlice.reducer;
