import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function RequestMeetNotice() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const meetRequest = useSelector((store) => store.RequestMeetReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MEET_REQUEST' });
  }, []);

  // to go back to Home page (app.jsx)
  const handleClickHome = (event) => {
    console.log('testing', meetRequest)
    event.preventDefault();
    history.push(`/`);
  };

  return (
    <>
      <div className='container'>
        <h2>Your request has been submitted!</h2>
        <input
          className="btn"
          type="submit"
          name="submit"
          value="Return to Home"
          onClick={handleClickHome}
        />
      </div>
    </>
  );
}

export default RequestMeetNotice;
