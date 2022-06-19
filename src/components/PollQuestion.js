import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUserId, hasTakenPoll } from "../selectors/user";
import { answerQuestion } from "../features/questions";
import { QUESTION_ANSWER_TYPE } from "../utils/enums";
import { useParams } from "react-router-dom";
import { getPollCounts } from "../selectors/questions";


const PollQuestion = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const questions = useSelector((state) => state.questions.questions);
  const user = useSelector(getAuthedUserId)
  const takenPoll = useSelector(hasTakenPoll(id))
  const {optionOne: optionOneVotes, optionTwo: optionTwoVotes} = useSelector(getPollCounts(id))

  //get relevant question data
  const questionData = Object.keys(questions).map((question) => {
    return {
      id: questions[question].id,
      optionOneText: questions[question].optionOne.text,
      optionTwoText: questions[question].optionTwo.text,
      optionOneVotes: questions[question].optionOne,
      optionTwoVotes: questions[question].optionTwo,
    };
  });

  //return the objects from the question with the id that matches the url
  const question = Object.keys(questionData).map((question) => {
    if (questionData[question].id === window.location.pathname.split("/")[2]) {
      return questionData[question];
    }
  });

  const removeUndefined = Object.keys(question).forEach((k) =>
    question[k] === undefined ? delete question[k] : {}
  );

  //map over the question object to display the options text
  const optionOneText = Object.keys(question).map((question) => {
    return questionData[question].optionOneText;
  });
  const optionTwoText = Object.keys(question).map((question) => {
    return questionData[question].optionTwoText;
  });

  //capitalize the first letter of the text
  const optionOneTextCapitalized = optionOneText.map((optionOneText) => {
    return optionOneText.charAt(0).toUpperCase() + optionOneText.slice(1);
  });
  const optionTwoTextCapitalized = optionTwoText.map((optionTwoText) => {
    return optionTwoText.charAt(0).toUpperCase() + optionTwoText.slice(1);
  });

  const submitAnswer = (optionType) => {
    dispatch(answerQuestion({optionType, user, id}))

  }

  return (
    <div className="container">
      <div className="poll-container">
        <div className="poll-question">
          <h2>Would you rather?</h2>
        </div>
        <div className="poll-answer-container">
          <div className="poll-answer">
            <div className="poll-title">{optionOneTextCapitalized}</div>
            {takenPoll ? <div className="poll-title">{optionOneVotes} </div> :
              <button className="poll-answer-btn" onClick={() => {
                submitAnswer(QUESTION_ANSWER_TYPE.OPTION_ONE)
              }}>Vote for This!
              </button>}
          </div>
          <div className="poll-answer">
            <div className="poll-title">{optionTwoTextCapitalized}</div>
            {takenPoll ? <div className="poll-title">{optionTwoVotes} </div> :
              <button className="poll-answer-btn" onClick={() => {
                submitAnswer(QUESTION_ANSWER_TYPE.Option_TWO)
              }}>Vote for This!
              </button>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default PollQuestion;
