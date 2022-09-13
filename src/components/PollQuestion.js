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

  const votePercentage = (votes) => {
    const totalVotes = optionOneVotes + optionTwoVotes;
    return Math.round((votes / totalVotes) * 100);
  };

  const votedByUser = (optionType) => {
    return question[optionType].votes.includes(user);
  };

  return (
    <div className="container">
      <div className="poll-container">
        <img src={avatarURL} alt="user-avatar" className="author-avatar" />
        <div className="poll-question">
          <h2>Would you rather?</h2>
        </div>
        <p className="voted-for">The option you voted for is shown in green</p>
        <div className="poll-answer-container">
          <div className="poll-answer">
            <div className="poll-title">{optionOneText}</div>
            {takenPoll ? (
              <div className="poll-results">
                <div
                  className="poll-results-bar"
                  style={{
                    width: `${votePercentage(optionOneVotes)}%`,
                    backgroundColor: votedByUser("optionOne")
                      ? "green"
                      : "lightpink",
                  }}
                >
                  {votePercentage(optionOneVotes)}%
                </div>
                <div className="poll-votes">Votes: {optionOneVotes} </div>
              </div>
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
              <div className="poll-results">
                <div
                  className="poll-results-bar"
                  style={{
                    width: `${votePercentage(optionTwoVotes)}%`,
                    backgroundColor: votedByUser("optionTwo")
                      ? "lightgreen"
                      : "lightpink",
                  }}
                >
                  {votePercentage(optionTwoVotes)}%
                </div>
                <div className="poll-votes">Votes: {optionTwoVotes} </div>
              </div>
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
