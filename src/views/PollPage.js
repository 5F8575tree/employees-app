import React from "react";
import Navbar from "../components/Navbar";
import PollQuestion from "../components/PollQuestion";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { getAllQuestion } from "../selectors/questions";
import { useParams } from "react-router-dom";

import Error from "../views/404"

const PollPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const user = useSelector((state) => state.authedUser);
  const questions = useSelector(getAllQuestion());

  useEffect(() => {
    user.authedUser != null ?
      console.log("user is logged in")
      :
      navigate("/")
  }, [navigate, user.authedUser])

  return (
    <div className="poll-page-plus">
      <Navbar />

      {/* {
        Object.keys(questions).map((v, i) => v == id ?

          <PollQuestion key={i} />

          : null

        )} */}

      {questions[id] !== undefined ? <PollQuestion /> : <Error />}
    </div>
  );
};

export default PollPage;

// <div className="not-found">
//   <h2>404</h2>
//   <h3>Sorry, that page does not exist.</h3>
//   <div className="not-found-btn">
//     <div onClick={handleClick}>
//       <button className="not-found-btn">Back to Home</button>
//     </div>
//   </div>
// </div>
