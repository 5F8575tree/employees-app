import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
  USER_ADD_QUESTION,
  USER_ANSWER_QUESTION,
} from "../actions/questions";

export default function questionsReducer(questions = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...questions,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...questions,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...questions,
        [action.question.id]: {
          ...questions[action.question.id],
          [action.answer]: {
            ...questions[action.question.id][action.answer],
            votes: questions[action.question.id][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    case USER_ADD_QUESTION:
      return {
        ...questions,
        [action.question.id]: action.question,
      };
    case USER_ANSWER_QUESTION:
      return {
        ...questions,
        [action.question.id]: {
          ...questions[action.question.id],
          [action.answer]: {
            ...questions[action.question.id][action.answer],
            votes: questions[action.question.id][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return questions;
  }
}
