import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function RequestMeetNotice() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const meetRequestNotice = useSelector(
    (store) => store.requestMeetNoticeReducer
  );
  const meetRequest = useSelector((store) => store.requestMeetReducer);
  const history = useHistory();

  useEffect(() => {
    // dispatch({ type: 'FETCH_MEET_REQUEST', payload: meetRequest });
    console.log(meetRequest);
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
        <p>We'll be in touch to schedule your Meet & Greet.</p>
        {/* <p>{JSON.stringify(meetRequest)}</p> */}
        <div>
          <h3>First Name: {meetRequest.firstName}</h3>
          <h3>Last Name: {meetRequest.lastName}</h3>
          <h3>Email: {meetRequest.email}</h3>
          <h3>Phone: {meetRequest.phone}</h3>
          <h3>Details:</h3>
          <p>{meetRequest.details}</p>
        </div>
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
