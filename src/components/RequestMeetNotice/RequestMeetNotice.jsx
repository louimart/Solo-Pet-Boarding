import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function RequestMeetNotice() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const meetRequestNotice = useSelector((store) => store.requestMeetNoticeReducer);
  const meetRequest = useSelector((store) => store.requestMeetReducer);
  const history = useHistory();

  useEffect(() => {
    // dispatch({ type: 'FETCH_MEET_REQUEST', payload: meetRequest });
    console.log(meetRequest)
  }, []);

  // to go back to Home page (app.jsx)
  const handleClickHome = (event) => {
    console.log('testing', meetRequest);
    event.preventDefault();
    history.push(`/`);
  };

  // console.log('meet request obj', meetRequest.firstName)

  return (
    <>
      <div className="container">
        <h2>Your request has been submitted!</h2>
        <p>{JSON.stringify(meetRequest)}</p>
        {/* {meetRequest.map((request) => {
          return (
            <div
              // className="movie-item"
              // data-testid="movieItem"
              key={request.id}
              onClick={handleClickToDetail}
              id={request.id}
            >
              <h2>{request.firstName}</h2>
            </div>
          );
        })}; */}
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
