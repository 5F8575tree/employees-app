import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUserId, hasTakenPoll } from "../selectors/user";
import { answerQuestion } from "../features/questions";
import { QUESTION_ANSWER_TYPE } from "../utils/enums";
import { useParams } from "react-router-dom";
import { getPollCounts, getQuestionById } from "../selectors/questions";

const PollQuestion = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(getAuthedUserId);
  const takenPoll = useSelector(hasTakenPoll(id));
  const question = useSelector(getQuestionById(id));
  const { optionOne: optionOneVotes, optionTwo: optionTwoVotes } = useSelector(
    getPollCounts(id)
  );

  const optionOneText = question?.optionOne?.text;
  const optionTwoText = question?.optionTwo?.text;

  const author = question?.author;
  const avatarURL = useSelector((state) => state.users.users[author].avatarURL);

  const submitAnswer = (optionType) => {
    dispatch(answerQuestion({ optionType, user, id }));
  };

  return (
    <div className="container">
      <div className="poll-container">
        <img src={avatarURL} alt="user-avatar" className="author-avatar" />
        <div className="poll-question">
          <h2>Would you rather?</h2>
        </div>
        <div className="poll-answer-container">
          <div className="poll-answer">
            <div className="poll-title">{optionOneText}</div>
            {takenPoll ? (
              <div className="poll-votes">Votes: {optionOneVotes} </div>
            ) : (
              <button
                className="poll-answer-btn"
                onClick={() => {
                  submitAnswer(QUESTION_ANSWER_TYPE.OPTION_ONE);
                }}
              >
                Vote for This!
              </button>
            )}
          </div>
          <div className="poll-answer">
            <div className="poll-title">{optionTwoText}</div>
            {takenPoll ? (
              <div className="poll-votes">Votes: {optionTwoVotes} </div>
            ) : (
              <button
                className="poll-answer-btn"
                onClick={() => {
                  submitAnswer(QUESTION_ANSWER_TYPE.Option_TWO);
                }}
              >
                Vote for This!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollQuestion;
