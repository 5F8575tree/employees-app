import { _saveQuestion, _saveQuestionAnswer } from "../../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const USER_ADD_QUESTION = "USER_ADD_QUESTION";
export const USER_ANSWER_QUESTION = "USER_ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function answerQuestion(question) {
  return {
    type: ANSWER_QUESTION,
    question,
  };
}

function userAddQuestion({ authedUser, qid }) {
  return {
    type: USER_ADD_QUESTION,
    authedUser,
    qid,
  };
}

function userAnswerQuestion({ authedUser, qid, answer }) {
  return {
    type: USER_ANSWER_QUESTION,
    authedUser,
    answer,
    qid,
  };
}

export const handleAddQuestion = (optionOne, optionTwo) => {
  return (dispatch) => {
    dispatch(showLoading);
    return _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }).then((question) => {
      dispatch(userAddQuestion({ authedUser: author, qid: question.id }));
      dispatch(addQuestion(question));
      dispatch(hideLoading());
    });
  };
};

export const handleAnswerQuestion = ({ authedUser, qid, answer }) => {
  return (dispatch) => {
    dispatch(showLoading);
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(userAnswerQuestion({ authedUser, qid, answer }));
      dispatch(answerQuestion({ authedUser, qid, answer }));
      dispatch(hideLoading());
    });
  };
};
