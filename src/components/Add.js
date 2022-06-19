import React from "react";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addQuestion } from "../features/questions";
import { getAuthedUserId } from "../selectors/user";
import { required } from "../utils/validators";
import { generateUID } from "../utils/_DATA";

const Add = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const author = useSelector(getAuthedUserId)
  return <Form
    onSubmit={(values) => {
      dispatch(addQuestion({...values, author, id: generateUID()}))
      navigate(-1)
    }}
    render={({handleSubmit}) => {
      return (
        <div className="container">
          <h2 className="create-poll-title">Create a Poll</h2>
          <form className="poll-container" onSubmit={handleSubmit}>
            <div className="create-poll-question">
              <h2>Would you rather?</h2>
            </div>
            <div className="create-poll-answer-container">
              <Field
                name="optionOne"
                className="create-poll-input"
                type="text"
                placeholder="Input your 'Option Two' text here"
                component="input"
                validate={required}
              />
              <Field
                name="optionTwo"
                className="create-poll-input"
                type="text"
                placeholder="Input your 'Option Two' text here"
                component="input"
                validate={required}
              />
              <button className="create-poll-button" type="submit">Create Poll</button>
            </div>
          </form>
        </div>
      )
    }
    }
  />

};

export default Add;
