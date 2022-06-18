import React from "react";
import { useSelector } from "react-redux";
import { answerQuestion } from "../features/questions";

const PollQuestion = () => {
  const questions = useSelector((state) => state.questions.questions);

  //return the objects from the question with the id that matches the url
  const questionData = Object.keys(questions).map((question) => {
    return {
      id: questions[question].id,
      optionOneText: questions[question].optionOne.text,
      optionTwoText: questions[question].optionTwo.text,
    };
  });

  //return the objects from the question with the id that matches the url
  const question = Object.keys(questionData).map((question) => {
    if (questionData[question].id === window.location.pathname.split("/")[2]) {
      return questionData[question];
    }
  });
  console.log(question);

  const removeUndefined = Object.keys(question).forEach((k) =>
    question[k] === undefined ? delete question[k] : {}
  );

  //map over the question object to display the optionOne text
  const optionOneText = Object.keys(question).map((question) => {
    return questionData[question].optionOneText;
  });

  //map over the question object to display the optionTwo text
  const optionTwoText = Object.keys(question).map((question) => {
    return questionData[question].optionTwoText;
  });

  //capitalize the first letter of the optionOne text
  const optionOneTextCapitalized = optionOneText.map((optionOneText) => {
    return optionOneText.charAt(0).toUpperCase() + optionOneText.slice(1);
  });

  //capitalize the first letter of the optionTwo text
  const optionTwoTextCapitalized = optionTwoText.map((optionTwoText) => {
    return optionTwoText.charAt(0).toUpperCase() + optionTwoText.slice(1);
  });

  //TODO: Figure out how to implement the answerQuestion function

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
