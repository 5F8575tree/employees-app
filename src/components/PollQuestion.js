import React from "react";
import { useSelector } from "react-redux";

const PollQuestion = () => {
  const questions = useSelector((state) => state.questions.questions);

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

  //map over the question object to display the votes
  const optionOneVotes = Object.keys(question).map((question) => {
    return questionData[question].optionOneVotes.votes;
  });
  const optionTwoVotes = Object.keys(question).map((question) => {
    return questionData[question].optionTwoVotes.votes;
  });

  return (
    <div className="container">
      <div className="poll-container">
        <div className="poll-question">
          <h2>Would you rather?</h2>
        </div>
        <div className="poll-answer-container">
          <div className="poll-answer">
            <div className="poll-title">{optionOneTextCapitalized}</div>
            <button className="poll-answer-btn">Vote for This!</button>
          </div>
          <div className="poll-answer">
            <div className="poll-title">{optionTwoTextCapitalized}</div>
            <button className="poll-answer-btn">Vote for This!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollQuestion;
