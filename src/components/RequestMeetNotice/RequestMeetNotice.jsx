import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function RequestMeetNotice() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const meetRequest = useSelector((store) => store.meetRequest);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MEET_REQUEST' });
  }, []);

  // useEffect to dispatch FetchMovieDetails
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
  }, []);

  // to go back to Home page (app.jsx)
  const handleClickHome = (event) => {
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
