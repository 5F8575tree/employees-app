import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <h2>404</h2>
      <h3>Sorry, that page does not exist.</h3>
      <div className="not-found-btn">
        <div onClick={handleClick}>
          <button className="not-found-btn">Back to Home</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
