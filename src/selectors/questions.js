import { createSelector } from "@reduxjs/toolkit";
import { QUESTION_ANSWER_TYPE } from "../utils/enums";

const getQuestions = ({questions}) => questions.questions

export const getQuestionById = (id) => createSelector(getQuestions, (questions) => questions[id])

export const getPollCounts = (id) => createSelector(getQuestionById(id), (question) => {
  return {
    [QUESTION_ANSWER_TYPE.OPTION_ONE]: question?.optionOne?.votes?.length ?? 0,
    [QUESTION_ANSWER_TYPE.Option_TWO]: question?.optionTwo?.votes?.length ?? 0
  }
})
